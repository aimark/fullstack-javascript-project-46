import genDiff from '../src/fgendiff.js';
import path from 'path';
import fs from 'fs';
// import { test, expect } from '@jest/globals';

const filepath1 = './__fixtures__/file1.json';
const filepath2 = './__fixtures__/file2.json';

const file1json = JSON.parse(fs.readFileSync(path.resolve(filepath1)), 'utf8');
const file2json = JSON.parse(fs.readFileSync(path.resolve(filepath2)), 'utf8');

const any = `{\n  - follow: false\n    host: hexlet.io\n  - proxy: 123.234.53.22\n  - timeout: 50\n  + timeout: 20\n  + verbose: true\n}`;

test('differ-of-json', () => {
  expect(genDiff(file1json, file2json)).toEqual(any);
});
