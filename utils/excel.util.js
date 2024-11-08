const XLSX = require('xlsx');

exports.readExcelFile = (filePath) => {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(sheet);
    return jsonData;
  } catch (error) {
    throw new Error('Error reading Excel file');
  }
};