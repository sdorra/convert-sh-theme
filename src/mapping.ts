
export const shikiSettingsVariables = {
  "editor.foreground": "--shiki-color-text",
  "editor.background": "--shiki-color-background",
};

export const codeHikeSettingsVariables = {
  "editorGroupHeader.tabsBackground": "--ch-tabs-bg",

  "tab.border": "--ch-tab-border",
  "tab.activeBorder": "--ch-tab-active-border",

  // "xtab.activeForeground": "--ch-tab-active-color",
  "tab.activeBackground": "--ch-tab-active-bg",
  "tab.inactiveForeground": "--ch-tab-inactive-color",
  "tab.inactiveBackground": "--ch-tab-inactive-bg",
  "icon.foreground": "--ch-icon-text",

  // "editorGroup.border": "--ch-debug",
  // "input.border": "--ch-debug",
  // "sideBar.border": "--ch-debug"
};

// taken from shiki source
// https://github.com/shikijs/shiki/blob/961cd9e2c2888294bb33d8cc41e5b7d4d33065e8/packages/shiki/src/highlighter.ts#L76
export const shikiColorReplacement: Record<string, string> = {
  "#000001": "--shiki-color-text",
  "#000002": "--shiki-color-background",
  "#000004": "--shiki-token-constant",
  "#000005": "--shiki-token-string",
  "#000006": "--shiki-token-comment",
  "#000007": "--shiki-token-keyword",
  "#000008": "--shiki-token-parameter",
  "#000009": "--shiki-token-function",
  "#000010": "--shiki-token-string-expression",
  "#000011": "--shiki-token-punctuation",
  "#000012": "--shiki-token-link",
};