const bookController = require('../controller/bookController')
const express = require('express')
const router = express.Router();
router.get('/',bookController.getBook)
router.post('/', bookController.addBook);
router.put('/:id', bookController.updateBooks);


module.exports = router;
