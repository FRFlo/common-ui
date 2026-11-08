import { render, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import TimelineFixture from "./TimelineFixture.svelte";
import StandaloneFixture from "./StandaloneFixture.svelte";

describe("Timeline", () => {
	it("compose les étapes et transmet les attributs et classes personnalisées", () => {
		render(TimelineFixture);
		expect(screen.getByRole("list", { name: "Étapes" })).toHaveClass("overflow-x-auto");
		expect(screen.getByTestId("root")).toHaveClass("px-2");
		expect(screen.getByTestId("root")).not.toHaveClass("px-6");
		expect(screen.getByTestId("item")).toHaveClass("w-24");
		expect(screen.getByTestId("item")).not.toHaveClass("w-32");
		expect(screen.getByTestId("indicator")).toHaveTextContent("1");
		expect(screen.getByTestId("indicator")).toHaveClass("bg-primary", "h-6", "w-6");
		expect(screen.getByTestId("indicator")).not.toHaveClass("h-4", "w-4");
		expect(screen.getByTestId("content")).toHaveClass("gap-2", "text-center");
		expect(screen.getByTestId("title")).toHaveClass("text-primary", "text-lg");
		expect(screen.getByTestId("description")).toHaveTextContent("Détail");
		expect(screen.getByTestId("subtle")).toHaveClass("text-muted-foreground/70");
		expect(screen.getByRole("link", { name: "Lien libre" })).toHaveAttribute("href", "/next");
		expect(screen.getByTestId("default-indicator")).toHaveAttribute("aria-hidden", "true");
		expect(screen.getByTestId("default-indicator")).toHaveClass("bg-muted-foreground/30");
		expect(screen.getByTestId("default-title")).toHaveClass("text-foreground");
	});

	it("affiche chaque variante de connecteur avec une transition accessible", () => {
		render(TimelineFixture);
		expect(screen.getByTestId("line")).toHaveAttribute("aria-hidden", "true");
		expect(screen.getByTestId("line")).toHaveClass("bg-border");
		expect(screen.getByTestId("trailing")).toHaveClass("bg-gradient-to-r");
		expect(screen.getByTestId("transition")).toHaveClass("custom-transition");
		expect(screen.getByRole("separator", { name: "Nouvelle période" })).toHaveAttribute(
			"aria-orientation",
			"vertical",
		);
	});

	it("fonctionne sans racine et conserve la disposition horizontale", () => {
		render(StandaloneFixture);
		expect(screen.getByTestId("item")).toHaveClass("flex-col");
		expect(screen.getByTestId("content")).toHaveClass("text-center");
		expect(screen.getByTestId("line")).toHaveClass("min-w-16");
	});
});
