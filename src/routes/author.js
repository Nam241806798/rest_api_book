const authorController = require("../controller/authorController");
const express = require('express')

const router =express.Router();

router.post("/", authorController.addAuthor);
router.get("/", authorController.getAuthor);
router.get('/:id', authorController.getIDbook);
router.put('/:id', authorController.updateAuthorS);
module.exports = router;

