#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('gendif')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0');

program
  .command('json [name]', 'Compares', {hidden: true})
  .argument('<filepath1> <filepath2>')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .action(() => {});

program.parse(process.argv);
