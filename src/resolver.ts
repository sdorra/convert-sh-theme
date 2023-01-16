import fetch from "node-fetch";
import fs from "fs/promises";
import { Theme } from "./theme";

const resolve = async (themePath: string): Promise<Theme> => {
  if (themePath.startsWith("http")) {
    const response = await fetch(themePath);
    return await response.json() as Theme;
  }
  const content = await fs.readFile(themePath, { encoding: "utf-8" });
  return JSON.parse(content);
}

export default resolve;