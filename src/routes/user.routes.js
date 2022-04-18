const express= require('express');
const {getMe, updateMe}= require('../controllers/user.controller');
const canAccess = require('../middleware/auth.middleware');

const userRoutes= express.Router();

userRoutes.get('/api/user/me', canAccess, getMe);
userRoutes.post('/api/user/me/update', canAccess, updateMe);
module.exports= userRoutes;