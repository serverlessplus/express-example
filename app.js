'use strict';

const path = require('path');
const express = require('express');
const getEventAndContext = require('serverlessplus/middleware').getEventAndContext;
const app = express();

app.use(getEventAndContext);

app.get('/express-example', (request, response) => {
    console.log(request.payload.event);
    console.log(request.payload.context);
    response.end('hello world');
});

// https://www.pexels.com/photo/adult-tiger-2055100/
app.use('/express-example/static', express.static(path.join(__dirname, 'static')));

module.exports = app;
