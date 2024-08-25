const express = require('express');
const { getAllData, addData, updateData, deleteData } = require('../controllers/dataController');
 
const router = express.Router();
 
router.get('/', getAllData);
router.post('/', addData);
router.put('/:key', updateData);
router.delete('/:key', deleteData);
 
module.exports = router;