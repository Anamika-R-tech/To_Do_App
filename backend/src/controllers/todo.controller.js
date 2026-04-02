const Todo = require('../models/todo.model');

const createTodos = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(200).send("created successfully");
    }
    catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

const getTodos = async (req, res) => {
    try {
        const todo = await Todo.find();
        res.status(200).json(todo);
    }
    catch (error) {
        res.status(500).json({ "error": error.message })
    }
};

const updateTodos = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body);
        res.status(200).json({ message: "Todo updated", data: updatedTodo });
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTodos = async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo deleted" });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }   
};

module.exports = { createTodos, getTodos, updateTodos, deleteTodos};