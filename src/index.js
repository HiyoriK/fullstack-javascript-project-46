import fs from 'fs';
import path from 'path';
import parse from './parser.js';

const gendiff = (filepath1, filepath2) => {
    const fullpath1 = path.resolve(filepath1);
    const fullpath2 = path.resolve(filepath2);

    const ext1 = path.extname(filepath1);
    const ext2 = path.extname(filepath2);

    const content1 = fs.readFileSync(filepath1, 'utf-8');
    const content2 = fs.readFileSync(filepath2, 'utf-8');

    const obj1 = parse(content1, ext1);
    const obj2 = parse(content2, ext2);

    console.log(obj1, obj2);
}

export default gendiff;
