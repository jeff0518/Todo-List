const express = require('express')
const router = express.Router()
const todos = require('./moudles/todos');
const home = require('./moudles/home')


router.use('/', home)
router.use('/todos', todos)

module.exports = router