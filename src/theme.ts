import cssVariablesTheme from "shiki/themes/css-variables.json";
import { codeHikeSettingsVariables, shikiSettingsVariables } from "./mapping";

export { cssVariablesTheme };

export type Settings = {
  [key: string]: string | undefined;
};

export type SettingsKeys = keyof Settings;

export type Token = {
  scope?: string | string[];
  settings?: Settings;
};

export type Theme = {
  colors: Record<string, string>;
  tokenColors: Token[];
};

export const createCodeHikeTheme = () => {
  const theme = JSON.parse(JSON.stringify(cssVariablesTheme)) as Theme;

  for (const [key, variable] of Object.entries(shikiSettingsVariables)) {
    theme.colors[key] = `var(${variable})`;
  }

  for (const [key, variable] of Object.entries(codeHikeSettingsVariables)) {
    theme.colors[key] = `var(${variable})`;
  }

  return theme;
};

