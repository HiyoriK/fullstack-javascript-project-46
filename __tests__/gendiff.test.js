import gendiff from "../index.js";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (name) =>
  path.join(__dirname, "..", "__fixtures__", name);
const getFilePath = (name) => path.join(name);

test("plain-json test", () => {
  const expected = fs.readFileSync(getFixturePath("plain.txt"), "utf-8");
  const file1 = getFilePath("file1.json");
  const file2 = getFilePath("file2.json");

  expect(gendiff(file1, file2)).toEqual(expected.trim());
});
