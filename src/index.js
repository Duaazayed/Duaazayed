const express = require('express');
const bodyParser = require('body-parser');
const tasksRoutes = require('../src/routes/tasks.routes');

const middleware = require('../src/middleware/errors.middleware');
const app = express();
const port = process.env.PORT || 3000;
const logLevel = process.env.LOG_LEVEL || 'dev';
app.use(logLevel);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/tasks', tasksRoutes);
app.use(middleware.error404);
app.use(middleware.error500);

app.listen(port, function() {
     console.log(`Running on port: ${port} ...`);

});


