const express = require('express');
const controllers = require('../controllers/auth.controller');

//const Router  = require('express');

const authRoutes = express.Router();
authRoutes.post('/register', controllers.register);
authRoutes.post('/login', controllers.login);
authRoutes.post('/token', controllers.token);
authRoutes.post('/logout', controllers.logout);



module.exports = authRoutes;