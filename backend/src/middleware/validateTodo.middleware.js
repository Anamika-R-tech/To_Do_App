const validateTodo = (req, res, next) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: "All fields are required" });
    }
    next();
};

module.exports = {validateTodo};