import fs from "fs/promises";
import path from "path";

const createWriter = (outputPath: string, stdout = console.log) => {
  if (outputPath) {
    return async (filepath: string, content: string) => {
      stdout(`... write file ${filepath}`);
      await fs.mkdir(outputPath, { recursive: true });
      await fs.writeFile(path.join(outputPath, filepath), content, { encoding: "utf-8" });
    };
  }
  return async (filepath: string, content: string) => {
    stdout(filepath);
    stdout("=======================================");
    stdout("");
    stdout(content);
    stdout("");
  };
};

export default createWriter;
