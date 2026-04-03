const express = require('express');

const router = express.Router();

// const getTodos = require('../controllers/todo.controller');

const { getTodos, createTodos, updateTodos, deleteTodos} = require('../controllers/todo.controller');
const showLog = require('../middleware/log.middleware');
const {validateTodo} = require('../middleware/validateTodo.middleware');
const { authenticate } = require('../middleware/auth.middleware');

router.get('/', getTodos);
router.post('/',validateTodo, createTodos);
router.put('/:id', updateTodos);
router.delete('/:id',deleteTodos);


module.exports = router;