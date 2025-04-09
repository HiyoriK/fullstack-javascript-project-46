import gendiff from "../index.js";
import { fileURLToPath } from "url";
import path from "path";
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', name);

test('plain-json test', () => {
    
const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');
const  expected = fs.readFileSync(getFixturePath('plain-json.txt'), 'utf8');

expect(gendiff(file1, file2)).toEqual(expected.trim());
});
