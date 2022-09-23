#!/usr/bin/env node

import { Command } from '../node_modules/commander/index.js';

const program = new Command();

program
  .name('gendif')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .argument('<filepath1> <filepath2>')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format');

program.parse(process.argv);