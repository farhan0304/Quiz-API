const express = require("express");
const {addNewQuestion,getAllQuestion} = require("../controllers")

const router = express.Router();

router.post('/add',addNewQuestion);


router.get('/getquestion',getAllQuestion);

module.exports = {router};