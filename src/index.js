import parse from "./parser.js";
import compare from "./comparator.js";

const gendiff = (filepath1, filepath2) => {
  const obj1 = parse(filepath1);
  const obj2 = parse(filepath2);

  const comparison = compare(obj1, obj2);

  console.log(comparison);
  return comparison;
};

export default gendiff;
