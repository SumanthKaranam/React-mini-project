const { v4: uuidv4 } = require('uuid');
const { getData, saveData } = require('../utils/localStorageUtil');
 
const getAllData = (req, res) => {
  res.json(getData());
};
 
const addData = (req, res) => {
  const { name } = req.body;
  const data = getData();
 
if (data.some(record => record.name.toLowerCase() === name.toLowerCase())) {
    return res.status(400).json({ message: 'Duplicate name not allowed' });
  }
 
  const newRecord = {
    key: uuidv4(),
    name,
    creationDate: new Date().toLocaleString(),
    lastEdited: new Date().toLocaleString(),
    editedBy: 'User',
  };
 
  const newData = [...data, newRecord];
  saveData(newData);
 
  res.json({ message: 'Record added successfully', data: newData });
};
 
const updateData = (req, res) => {
  const { key } = req.params;
  const { name } = req.body;
  const data = getData();
 
const existingRecord = data.find(record => record.name.toLowerCase() === name.toLowerCase());
 
  if (existingRecord && existingRecord.key !== key) {
    return res.status(400).json({ message: 'Duplicate name not allowed' });
  }
 
  const newData = data.map((item) =>
    item.key === key ? { ...item, name, lastEdited: new Date().toLocaleString(), editedBy: 'User' } : item
  );
 
  saveData(newData);
 
  res.json({ message: 'Record updated successfully', data: newData });
};
 
const deleteData = (req, res) => {
  const { key } = req.params;
  const data = getData();
 
  const newData = data.filter((item) => item.key !== key);
  saveData(newData);
 
  res.json({ message: 'Record deleted successfully', data: newData });
};
 
module.exports = { getAllData, addData, updateData, deleteData };