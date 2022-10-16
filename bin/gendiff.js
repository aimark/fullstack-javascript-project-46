#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import genDiff from '../src/fgendiff.js';

const program = new Command();

program
  .name('gendif')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .helpOption('-h, --help', 'output usage information');

program
  .command('json')
  .description('Compares two json files')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const { args } = program;
    if (path.extname(args[1]) === '.json' && path.extname(args[2]) === '.json') {
      const file1json = JSON.parse(fs.readFileSync(path.resolve(filepath1)));
      // const file1json = JSON.parse(fs.readFileSync(path.resolve(filepath1)), 'utf8');
      // создали объект JavaScript
      const file2json = JSON.parse(fs.readFileSync(path.resolve(filepath2)));
      const resultDiff = genDiff(file1json, file2json);
      console.log(resultDiff);
    } else {
      console.log('Wrong formate');
    }
  });

program.parse(process.argv);
