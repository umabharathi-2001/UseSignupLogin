const excelUtil = require('../utils/excel.util');

exports.processExcel = async (filePath) => {
  // Use the utility to parse and process the Excel file
  const chatData = await excelUtil.readExcelFile(filePath);

  // Additional processing or database operations can be done here
  return chatData;
};
