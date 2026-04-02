const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.routes');
const cookieParser = require('cookie-parser');
// const session = require('express-session');  

app.use(express.json());


app.use(cookieParser());

app.get("/set-cookie", (req, res) => {
    res.cookie("name","user-1");
    res.send("Cookie has been set");
});

app.get("/get-cookie", (req, res) => {
    res.json(req.cookies);
});

// app.use(session({
// secret: "my-secret-key",
// resave: false,
// saveUninitialized: true,
// cookie: { secure: false }
// }));

app.use('/api/todos', todoRoutes);
module.exports = app;