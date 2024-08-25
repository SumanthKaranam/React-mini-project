const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./data');
 
const LOCAL_STORAGE_KEY = 'tableData';
 
const getData = () => {
  const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedData ? JSON.parse(storedData) : [];
};
 
const saveData = (data) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
};
 
module.exports = { getData, saveData };