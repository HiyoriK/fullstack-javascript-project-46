import path from 'path';
import fs from 'fs';
import parse  from './parser.js';

const genDiff = (filepath1, filepath2) => {
    const fullPath1 = path.resolve(filepath1);
    const fullPath2 = path.resolve(filepath2);

    const content1 = fs.readFileSync(fullPath1, 'utf-8');
    const content2 = fs.readFileSync(fullPath2, 'utf-8');

    const parsedData1 = parse(content1);
    const parsedData2 = parse(content2);

    console.log(arsedData1, parsedData2);
   
};

export default genDiff;
