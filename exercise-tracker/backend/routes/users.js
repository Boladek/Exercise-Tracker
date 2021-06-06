const express = require('express');
const router = express.Router()
const { getAll } = require('../controllers/getController');
const { addUser } = require('../controllers/postController');

router.get('/', getAll);
router.post('/add', addUser);  

module.exports = router;