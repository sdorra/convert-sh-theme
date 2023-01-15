const createCss = (vars: Record<string, string | undefined>, codeHike: boolean = false) => {
  let css = ":root {\n";

  let ns = "";
  let group = "";

  for (const [key, value] of Object.entries(vars)) {
    const parts = key.split("-");
    if ((ns && ns !== parts[2]) || (group && group !== parts[3])) {
      css += "\n";
    }
    ns = parts[2];
    group = parts[3];
    const defaultValue = vars["--shiki-color-text"];
    css += `  ${key}: ${value || defaultValue};\n`;
  }
  css += "}";
  if (codeHike) {
    css += `

.ch-codegroup .ch-editor-button,
.ch-codeblock .ch-code-button {
  color: var(--ch-icon-text);
}

div.ch-editor-tab-active {
  color: var(--ch-tab-active-color);
}
`;
  }

  return css;
};

export default createCss;
