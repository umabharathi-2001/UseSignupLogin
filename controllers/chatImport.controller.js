const path = require('path');
const excelService = require('../services/chatImport.service');

const importChat = async (req, res) => {
  try {
    const filePath = path.join(__dirname, '../', req.file.path);
    const chatData = await excelService.processExcel(filePath);
    
    res.status(200).send({ status:1,message: 'Chat data imported successfully', data: chatData });
  } catch (error) {
    console.error('Error importing chat data:', error);
    res.status(500).send({ status:0,message: 'Failed to import chat data',data:{}});
  }
};

module.exports={
    importChat
}