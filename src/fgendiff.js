import _ from 'lodash';

export default (file1, file2) => {
  const keysList = _.uniq(_.sortBy(_.concat(_.keys(file1), _.keys(file2))));
  let result = '{\n';
  keysList.forEach((elem) => {
    if ((_.has(file1, elem) && _.has(file2, elem))
      && file1[elem] === file2[elem]) {
      result += `    ${elem}: ${file1[elem]}\n`;
    } else if (_.has(file1, elem) && !_.has(file2, elem)) {
      result += `  - ${elem}: ${file1[elem]}\n`;
    } else if (!_.has(file1, elem) && _.has(file2, elem)) {
      result += `  + ${elem}: ${file2[elem]}\n`;
    } else {
      result += `  - ${elem}: ${file1[elem]}\n  + ${elem}: ${file2[elem]}\n`;
    }
  });
  result += '}';
  return result;
};
