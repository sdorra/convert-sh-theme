import fs from "fs";
import path from "path";
import createCss from "./css";
import { createCodeHikeTheme, Theme } from "./theme";
import createVars from "./vars";

const args = process.argv.slice(2);
if (args.length !== 2) {
  console.log("Usage convert path/to/theme.json output/path");
  process.exit(1);
}

console.log("Create css and theme.");
console.log("");

const theme = JSON.parse(fs.readFileSync(args[0], { encoding: "utf-8" })) as Theme;

const vars = createVars(theme, true);

const directory = args[1];
fs.mkdirSync(directory, { recursive: true });

const cssPath = path.join(directory, "styles.css");
console.log("... write css to", cssPath);
fs.writeFileSync(cssPath, createCss(vars, true), { encoding: "utf-8" });

const themePath = path.join(directory, "theme.json");
console.log("... write theme to", themePath);
fs.writeFileSync(themePath, JSON.stringify(createCodeHikeTheme(), null, 2), {
  encoding: "utf-8",
});

console.log("");
console.log("Add the css to your website and pass the theme to the code hike configuration.");
