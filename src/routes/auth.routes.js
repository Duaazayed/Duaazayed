const express = require('express');
const {register,login,token,logout} = require('../controllers/auth.controller');

//const Router  = require('express');

const authRoutes = express.Router();
//authRoutes.get('/api/auth', login);
authRoutes.post('/api/auth/register', register);
authRoutes.post('/api/auth/login', login);
authRoutes.post('/api/auth/token', token);
authRoutes.post('/api/auth/logout',logout);



module.exports = authRoutes;