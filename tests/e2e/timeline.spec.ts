import { test, expect } from "@playwright/test";

test("la timeline des examens est accessible et présente les étapes dans l’ordre", async ({
	page,
}) => {
	await page.goto("/");
	const timeline = page.getByRole("list", { name: "Prochains examens" });
	await expect(timeline).toBeVisible();
	await expect(
		timeline
			.getByRole("listitem")
			.filter({ hasText: /Maintenant|Mathématiques|Physique|Informatique/ }),
	).toHaveText([/Maintenant/, /Mathématiques/, /Physique/, /Informatique/]);
	await expect(
		timeline.getByRole("separator", { name: "Changement vers la période suivante" }),
	).toBeVisible();
});

test("la frise reste consultable sur petit écran", async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 800 });
	await page.goto("/");
	const timeline = page.getByRole("list", { name: "Prochains examens" });
	await timeline.scrollIntoViewIfNeeded();
	expect(await timeline.evaluate((el) => el.scrollWidth > el.clientWidth)).toBe(true);
	await timeline.evaluate((el) => {
		el.scrollLeft = el.scrollWidth;
	});
	expect(await timeline.evaluate((el) => el.scrollLeft)).toBeGreaterThan(0);
	await expect(timeline.getByText("Informatique")).toBeInViewport();
});

test("le thème suit les changements du système", async ({ page }) => {
	await page.emulateMedia({ colorScheme: "light" });
	await page.goto("/");
	await page.evaluate(() => localStorage.setItem("common-ui-theme", "light"));
	await expect(page.getByRole("main")).toHaveCSS("color-scheme", "light");
	await expect(page.getByRole("main")).toHaveCSS("background-color", "rgb(255, 255, 255)");

	await page.emulateMedia({ colorScheme: "dark" });
	await expect(page.getByRole("main")).toHaveCSS("color-scheme", "dark");
	await expect(page.getByRole("main")).toHaveCSS("background-color", "rgb(11, 15, 20)");
	await page.reload();
	await expect(page.getByRole("main")).toHaveCSS("color-scheme", "dark");

	await page.emulateMedia({ colorScheme: "light" });
	await expect(page.getByRole("main")).toHaveCSS("color-scheme", "light");
});

for (const colorScheme of ["light", "dark"] as const) {
	test(`le texte reste contrasté en mode ${colorScheme}`, async ({ page }) => {
		await page.emulateMedia({ colorScheme });
		await page.goto("/");
		const results = await page.locator("main").evaluate((main) => {
			const canvas = document.createElement("canvas");
			canvas.width = 1;
			canvas.height = 1;
			const context = canvas.getContext("2d");
			if (!context) throw new Error("Canvas indisponible");
			const background = getComputedStyle(main).backgroundColor;
			const pixel = (color: string) => {
				context.clearRect(0, 0, 1, 1);
				context.fillStyle = background;
				context.fillRect(0, 0, 1, 1);
				context.fillStyle = color;
				context.fillRect(0, 0, 1, 1);
				return Array.from(context.getImageData(0, 0, 1, 1).data).slice(0, 3);
			};
			const luminance = (channels: number[]) => {
				const linear = channels.map((channel) => {
					const value = channel / 255;
					return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
				});
				return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
			};
			const backgroundLuminance = luminance(pixel(background));
			return Array.from(main.querySelectorAll("h1, h2, a, span"))
				.filter((element) => Array.from(element.childNodes).some((node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim()))
				.map((element) => {
					const foregroundLuminance = luminance(pixel(getComputedStyle(element).color));
					return {
						text: element.textContent?.trim(),
						contrast: (Math.max(backgroundLuminance, foregroundLuminance) + 0.05) /
							(Math.min(backgroundLuminance, foregroundLuminance) + 0.05),
					};
				});
		});
		for (const result of results) {
			expect(result.contrast, `${result.text} doit atteindre un contraste de 4,5:1`).toBeGreaterThanOrEqual(4.5);
		}
	});
}
