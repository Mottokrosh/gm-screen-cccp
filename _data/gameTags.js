const csv = require('csvtojson');

const getData = async (csvFilePath = '_data/csv/tags.csv') => {
  const results = await csv().fromFile(csvFilePath);
  return results;
};

module.exports = getData();
