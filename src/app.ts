import fs from "fs/promises";
import createCss from "./css";
import createVars from "./vars";
import createWriter from "./writer";
import { createCodeHikeTheme, Theme } from "./theme";
import { ExistingPath } from "cmd-ts/batteries/fs";
import { command, string, positional, option, flag, boolean } from "cmd-ts";

const app = command({
  name: "convert",
  description: "Convert vs code theme to shiki/ch css variables",
  args: {
    themePath: positional({
      type: ExistingPath,
      displayName: "theme",
      description: "Path to vs code theme",
    }),
    codeHike: flag({
      type: boolean,
      long: "code-hike",
      description: "Add Code Hike css variables and theme to the output",
    }),
    output: option({
      short: "o",
      long: "out",
      type: string,
      description: "Output path, default writes to stdout",
      defaultValue: () => "",
    }),
  },
  handler: async (args) => {
    const content = await fs.readFile(args.themePath, { encoding: "utf-8" });
    const theme = JSON.parse(content) as Theme;

    const vars = createVars(theme, args.codeHike);

    const writer = createWriter(args.output);
    await writer("style.css", createCss(vars, args.codeHike));
    if (args.codeHike) {
      const codeHikeTheme = createCodeHikeTheme();
      await writer("theme.json", JSON.stringify(codeHikeTheme, null, 2));
    }
  },
});

export default app;
