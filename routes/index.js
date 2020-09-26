// import { Router } from 'express';
// import botRouter from './search';

var express = require("express");
var botRouter = require("./search")

const v1Router = express.Router();
v1Router.use('/api/v1', botRouter);

module.exports = v1Router;