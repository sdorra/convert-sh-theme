import { codeHikeSettingsVariables, shikiColorReplacement, shikiSettingsVariables } from "./mapping";
import { cssVariablesTheme, SettingsKeys, Theme, Token } from "./theme";

const getScope = (token: Token) => {
  if (!token.scope) {
    return [];
  } else if (typeof token.scope === "string") {
    return token.scope.split("s+");
  }
  return token.scope;
};

const findColor = (theme: Theme, scope: string, key: SettingsKeys) => {
  for (const token of theme.tokenColors) {
    if (getScope(token).includes(scope) && token.settings?.[key]) {
      return token.settings[key];
    }
  }
};

const getVariableName = (token: Token) => {
  const cssColor = token.settings?.foreground;
  if (!cssColor) {
    return;
  }

  const variable = shikiColorReplacement[cssColor];
  if (variable) {
    return variable;
  }
};

const findVariableValue = (theme: Theme, token: Token) => {
  for (const scope of getScope(token)) {
    const color = findColor(theme, scope, "foreground");
    if (color) {
      return color;
    }
  }
};

const createVars = (theme: Theme, codeHike: boolean) => {
  const vars: Record<string, string | undefined> = {};

  for (const [key, variable] of Object.entries(shikiSettingsVariables)) {
    vars[variable] = theme.colors[key];
  }

  for (const token of cssVariablesTheme.tokenColors) {
    const variable = getVariableName(token);
    if (variable) {
      const value = findVariableValue(theme, token);
      if (value || !vars[variable]) {
        vars[variable] = value;
      }
    }
  }

  if (codeHike) {
    for (const [key, variable] of Object.entries(codeHikeSettingsVariables)) {
      vars[variable] = theme.colors[key];
    }
  }

  return vars;
};

export default createVars;
