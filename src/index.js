import parsers from './parser.js';
import compare from './comparator.js';

const gendiff = (filepath1, filepath2) => {

    const obj1 = parsers(filepath1);
    const obj2 = parsers(filepath2);

    const comparison = compare(obj1, obj2);

    console.log(comparison);
}

export default gendiff;
