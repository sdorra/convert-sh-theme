import { expect, it } from "vitest";
import { run } from "cmd-ts";
import app from "./app";
import nord from "shiki/themes/nord.json";
import fs from "fs/promises";
import path from "path";

it("should generate style.css", async () => {
  try {
    await fs.mkdir("temp", { recursive: true });
    const input = path.join("temp", "input.json");
    await fs.writeFile(input, JSON.stringify(nord), { encoding: "utf-8" });

    await run(app, ["--out", "temp", input]);

    const content = await fs.readFile(path.join("temp", "style.css"), {encoding: "utf-8"});
    expect(content).contains("--shiki-color-text");
  } finally {
    await fs.rm("temp", { force: true, recursive: true });
  }
});

it("should generate theme.json", async () => {
  try {
    await fs.mkdir("temp", { recursive: true });
    const input = path.join("temp", "input.json");
    await fs.writeFile(input, JSON.stringify(nord), { encoding: "utf-8" });

    await run(app, ["--code-hike", "--out", "temp", input]);

    const content = await fs.readFile(path.join("temp", "theme.json"), {encoding: "utf-8"});
    expect(content).contains("--shiki-color-text");
  } finally {
    await fs.rm("temp", { force: true, recursive: true });
  }
});