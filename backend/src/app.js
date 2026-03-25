const express = require('express');

const app = express();

const todoRoutes = require('./routes/todo.routes');

app.use(express.json());

// ✅ Add this
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/todos', todoRoutes);

module.exports = app;