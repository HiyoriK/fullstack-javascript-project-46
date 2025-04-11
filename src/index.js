import parse from "./parser.js";
import buildTree from "./comparator.js";
import chooseFormat from "../formatters/index.js";

const gendiff = (filepath1, filepath2, format = 'stylish') => {
  const obj1 = parse(filepath1);
  const obj2 = parse(filepath2);
  const comparison = buildTree(obj1, obj2);
  const formattedResult = chooseFormat(comparison, format);
  console.log(formattedResult);
  return formattedResult;
};

export default gendiff;
