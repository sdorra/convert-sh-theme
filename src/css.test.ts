import { expect, it } from "vitest";
import createCss from "./css";

it("should create css", () => {
  const css = createCss({
    "--sample-rule-var": "black",
    "--sample-orule-var": "green",
  });
  expect(css).contains("--sample-rule-var: black;");
  expect(css).contains("--sample-orule-var: green;");
});

it("should fallback to shiki text for undefined css", () => {
  const css = createCss({
    "--shiki-color-text": "red",
    "--sample-var": undefined,
  });
  expect(css).contains("--shiki-color-text: red;");
  expect(css).contains("--sample-var: red;");
});

it("should contain rule for active tab", () => {
  const css = createCss({}, true);
  expect(css).contains(`div.ch-editor-tab-active {
  color: var(--ch-tab-active-color);
}`);
});

it("should contain rule for icon text", () => {
  const css = createCss({}, true);
  expect(css).contains(`.ch-codegroup .ch-editor-button,
.ch-codeblock .ch-code-button {
  color: var(--ch-icon-text);
}`);
});

it("should not add code hike related rules", () => {
  const css = createCss({}, false);
  expect(css).not.contains(".ch-codegroup","ch-editor-tab-active");
});
