'use strict';

const path = require('path');
const express = require('express');
const app = express();

app.get('/express-example', (request, response) => {
    response.end('hello world');
});

// https://www.pexels.com/photo/adult-tiger-2055100/
app.use('/express-example/static', express.static(path.join(__dirname, 'static')));

module.exports = app;
