const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logMiddleware = require('./middleware/log.middleware');

app.use(express.json());

app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
    res.cookie("name","user-1");
    res.send("Cookie has been set");
});

app.get("/get-cookie", (req, res) => {
    res.json(req.cookies);
});

app.use(session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use(logMiddleware);

app.use('/api/todos', todoRoutes);

app.post('/login', (req, res) => {
    const { username } = req.body;
    req.session.user = username;
    res.send("Login successful");
});

app.get('/profile', (req, res) => {
    if (!req.session.user) {
        return res.status(401).send("Unauthorized");
    }
    res.send(`Welcome, ${req.session.user}`);
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    return res.send("Logged out successfully");
});

module.exports = app;