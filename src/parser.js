import path from "path";
import yaml from "js-yaml";
import fs from "fs";

const parse = (file) => {
  const fullpath = path.resolve(process.cwd(), file);
  const extension = path.extname(fullpath);
  const content = fs.readFileSync(fullpath);

  switch (extension) {
    case ".json":
      return JSON.parse(content);
    case ".yaml":
    case ".yml":
      return yaml.load(content);
    default:
      throw new Error(`Unknown ${extension}`);
  }
};

export default parse;
