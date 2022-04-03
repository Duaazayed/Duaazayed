const express = require('express');
const bodyParser = require('body-parser');
const logger= require('morgan');

const reservationRoutes = require('./routes/reservation.routes');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const middleware = require('../src/middleware/errors.middleware');

const app = express();
const port = process.env.PORT || 3000;
const logLevel = process.env.LOG_LEVEL || 'dev';
app.use(logger(logLevel));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/reservation', reservationRoutes);

app.use(middleware.error404);
app.use(middleware.error500);

app.listen(port, function() {
     console.log(`Running on port: ${port} ...`);

});


