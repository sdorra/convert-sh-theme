import { expect, it } from "vitest";
import { createCodeHikeTheme } from "./theme";

it("should add shiki color variables", () => {
  const theme = createCodeHikeTheme();
  expect(theme.colors["editor.foreground"]).toBe("var(--shiki-color-text)");
  expect(theme.colors["editor.background"]).toBe("var(--shiki-color-background)");
});

it("should add code hike color variables", () => {
  const theme = createCodeHikeTheme();
  expect(theme.colors["editorGroupHeader.tabsBackground"]).toBe("var(--ch-tabs-bg)");
  expect(theme.colors["tab.border"]).toBe("var(--ch-tab-border)");
  expect(theme.colors["tab.activeBorder"]).toBe("var(--ch-tab-active-border)");
  expect(theme.colors["tab.activeBackground"]).toBe("var(--ch-tab-active-bg)");
  expect(theme.colors["tab.inactiveForeground"]).toBe("var(--ch-tab-inactive-color)");
  expect(theme.colors["tab.inactiveBackground"]).toBe("var(--ch-tab-inactive-bg)");
  expect(theme.colors["icon.foreground"]).toBe("var(--ch-icon-text)");
});
