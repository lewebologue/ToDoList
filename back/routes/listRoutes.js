const express = require('express');
const router = express.Router();

const listController = require('../controllers/list');

router.get('/all', listController.getLists);
router.get('/:id', listController.getList);
router.post('/new', listController.createList);
router.put('/:id', listController.editList);
router.delete('/:id', listController.deleteList);

module.exports = router;