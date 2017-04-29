'use strict';

//fetch dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const logger = require('morgan');

const router = require('./router');

const app = express();
const PORT = process.env.PORT || 3000;

//setup bodyParser
app.use(bodyParser.json());
app.use(bodeParser.urlencoded({ extended: true }));

//setup morgan & cors
app.use(logger());
app.use(cors());

app.use('/api', router);

app.listen(PORT, function() {
	console.log('Server is up and running on %s', process.env.PORT || PORT;
});

module.exports = app;