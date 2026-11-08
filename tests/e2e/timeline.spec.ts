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
	await expect(page.locator("html")).toHaveCSS("color-scheme", "light");
	await expect(page.locator("html")).toHaveCSS("background-color", "rgb(255, 255, 255)");

	await page.emulateMedia({ colorScheme: "dark" });
	await expect(page.locator("html")).toHaveCSS("color-scheme", "dark");
	await expect(page.locator("html")).toHaveCSS("background-color", "rgb(24, 26, 24)");
	await page.reload();
	await expect(page.locator("html")).toHaveCSS("color-scheme", "dark");

	await page.emulateMedia({ colorScheme: "light" });
	await expect(page.locator("html")).toHaveCSS("color-scheme", "light");
});
