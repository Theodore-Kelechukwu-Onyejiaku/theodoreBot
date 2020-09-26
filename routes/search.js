// import { Router } from 'express';
// import WhatsappBot from '../controllers/theodoreBot';

var express = require("express");
var botRouter = express.Router();
var WhatsappBot = require("../controllers/WhatsappBot")

botRouter.post('/incoming', WhatsappBot.googleSearch);

module.exports = botRouter;