const mysql = require('mysql');
const queries = require('../src/queries/tasks.queries');
const host = process.env.DB_HOST || 'localhost'; //get the host from environment or use default
const user = process.env.DB_USER || 'root'; //get the user fo DB from environment or use default
const password = process.env.DB_PASS || 'password';
const database = process.env.DB_DATABASE || 'tododb';
const con = mysql.createConnection({
    host,
    user,
    password,
    database
});

con.connect(function(err){
    if (err) throw err;
    console.log('Connected!');

    con.query(queries.CREATE_TASKS_TABLE, function(err, result){
        if (err) throw err;
        console.log('Table created or exists already!');
    
    });
});
module.exports = con;

