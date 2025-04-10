import getStylishDiff from "./stylish.js";
import getPlainDiff from "./plain.js";

const chooseFormat = (diff, format) => {
    // switch (format) {
    //     case "stylish":
    //       return JSON.parse(content);
    //     // case ".yaml":
    //     // case ".yml":
    //     //   return yaml.load(content);
    //     default:
    //       throw new Error(`Unknown ${extension}`);
    // };
    return getStylishDiff(diff, '  ', 2);
};

export default chooseFormat;
