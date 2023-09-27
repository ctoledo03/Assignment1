const express = require('express');
const app = express();

function logger(req, res, next) {
    console.log(req.method, req.url);

    next();
}

function helloWorld(req, res, next) {
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World');
}

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello World");
}

function homePage(req, res, next) {
    res.send('This is the homepage');
}

app.use(logger);
app.use('/hello', helloWorld);
app.use('/goodbye', goodbyeWorld);
app.use('/', homePage);

app.listen(3000);
console.log('Server running at http://localhost:3000/');
