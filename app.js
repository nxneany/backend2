var express = require('express');
var app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
})

module.exports = app;