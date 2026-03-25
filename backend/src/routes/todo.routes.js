const express = require('express');
const router = express.Router();

const {
  getTodos,
  createTodo
} = require('../controllers/todo.controller');

// ✅ GET all todos
router.get('/', getTodos);

// ✅ CREATE todo
router.post('/', createTodo);

module.exports = router;