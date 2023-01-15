import { expect, it } from "vitest";
import fs from "fs/promises";
import path from "path";
import createWriter from "./writer";

it("should create console output", async () => {
  const output: string[] = [];

  const writer = createWriter("", (msg) => output.push(msg));
  await writer("test.txt", "content");

  expect(output).toEqual(expect.arrayContaining(["test.txt", "content"]));
});

it("should create file output", async () => {
  let content = "";
  try {
    const writer = createWriter("temp");
    await writer("test.txt", "content");

    content = await fs.readFile(path.join("temp/test.txt"), { encoding: "utf-8" });
  } finally {
    await fs.rm("temp", { force: true, recursive: true });
  }
  expect(content).toBe("content");
});
