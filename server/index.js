/*const express = require('express');
const bodyParser = require('body-parser');
//const tasksRoutes = require(''./routes/tasks.routes');
//const middleware = require('.middleware/errors.middleware');
const app = express();
const port = process.env.PORT || 3000;
const logLevel = process.env.LOG_LEVEL || 'dev';
app.use(logLevel);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/tasks', tasksRoutes);
app.use(middleware.error404);
app.use(middleware.error500);

app.listen(port, function(){
     console.log('Running on port: ${port} ...');

});
*/

const express = require('express');

const app =express();
app.use(express.static('public'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/src'));

app.listen(3000, function(){
     console.log('Server started at http://localhost:%s',3000)
});
/*const server = http.createServer('/', function( req, res){

})

server.listen(3000);*/