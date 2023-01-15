import { expect, it } from "vitest";
import nord from "shiki/themes/nord.json";
import createVars from "./vars";

it("should define shiki color variables", () => {
  const vars = createVars(nord, false);
  expect(vars["--shiki-color-text"]).toBe("#d8dee9");
  expect(vars["--shiki-color-background"]).toBe("#2e3440");
});

it("should define shiki token variables", () => {
  const vars = createVars(nord, false);
  expect(vars["--shiki-token-constant"]).toBe("#B48EAD");
  expect(vars["--shiki-token-string"]).toBe("#A3BE8C");
  expect(vars["--shiki-token-comment"]).toBe("#616E88");
  expect(vars["--shiki-token-keyword"]).toBe("#81A1C1");
  expect(vars["--shiki-token-function"]).toBe("#88C0D0");
  expect(vars["--shiki-token-string-expression"]).toBe("#81A1C1");
});

it("should add undefined shiki token variables", () => {
  const vars = createVars(nord, false);
  expect(vars["--shiki-token-parameter"]).toBeUndefined();
  expect(vars["--shiki-token-punctuation"]).toBeUndefined();
  expect(vars["--shiki-token-link"]).toBeUndefined();
});

it("should define code hike variables", () => {
  const vars = createVars(nord, true);
  expect(vars["--ch-tabs-bg"]).toBe("#2e3440");
  expect(vars["--ch-tab-border"]).toBe("#3b425200");
  expect(vars["--ch-tab-active-border"]).toBe("#88c0d000");
  expect(vars["--ch-tab-active-bg"]).toBe("#3b4252");
  expect(vars["--ch-tab-inactive-color"]).toBe("#d8dee966");
  expect(vars["--ch-tab-inactive-bg"]).toBe("#2e3440");
});

it("should add undefined code hike variables", () => {
  const vars = createVars(nord, true);
  expect(vars["--ch-icon-text"]).toBeUndefined();
});
