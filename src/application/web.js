const express = require('express');

const web = express();
web.use(express.json());

module.exports = web;