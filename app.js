const express = require('express');
const app = express();

// Middleware

const middleware = (req , res , next) => {
    console.log(`Hello my Middleware`);
}

middleware();

app.get('/', (req , res) => {
    res.send(`Hello world from the server`);
});

app.get('/about', (req , res) => {
    res.send(`Hello About world from the server`);
});

app.get('/contact', (req , res) => {
    res.send(`Hello Contact world from the server`);
});

app.get('/singin', (req , res) => {
    res.send(`Hello Login world from the server`);
});

app.get('/signup', (req , res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(3000, () => {
    console.log(`Server is running at port no 3000`);
})