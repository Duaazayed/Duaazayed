const controllers = require('../controllers/tasks.controller');
const express = require('express');
const Router  = require('express');

const tasksRoutes = express.Router();
tasksRoutes.get('/', controllers.getALLTasks).post('/', controllers.createTask);

tasksRoutes.get('/:taskId', controllers.getTask);
tasksRoutes.put('/:taskId', controllers.updateTask);
tasksRoutes.delete('/:taskId', controllers.deleteTask);

module.exports = tasksRoutes;