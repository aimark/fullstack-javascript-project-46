import { program } from 'commander';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';

const command = ([filepath1, filepath2]) => {
  const path1 = path.resolve(process.cwd(), filepath1);
  const file1json = JSON.parse(fs.readFileSync(path1));
  const path2 = path.resolve(process.cwd(), filepath2);
  const file2json = JSON.parse(fs.readFileSync(path2));
  const keysList = _.uniq(_.sortBy(_.concat(_.keys(file1json), _.keys(file2json))));
  
  let result = '{\n';
  keysList.forEach((elem) => {
    if ((_.has(file1json, elem) && _.has(file2json, elem)) &&
      file1json[elem] === file2json[elem]) {
      result += `    ${elem}: ${file1json[elem]}\n`;
    }
    else if (_.has(file1json, elem) && !_.has(file2json, elem)) {
      result += `  - ${elem}: ${file1json[elem]}\n`;
    }
    else if (!_.has(file1json, elem) && _.has(file2json, elem)) {
      result += `  + ${elem}: ${file2json[elem]}\n`;
    }
    else {
      result += `  - ${elem}: ${file1json[elem]}\n  + ${elem}: ${file2json[elem]}\n`;
    }
  });
  console.log(result + `}`);
};

program.parse(process.argv);
const { args } = program;

if (path.extname(args[0]) === '.json' && path.extname(args[1]) === '.json') {
  command(args);
} else {
  console.log('Wrong formate');
}
//command(args);