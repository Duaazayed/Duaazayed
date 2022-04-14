const mysql = require('mysql');
const {CREATE_RESERVATION_TABLE}= require('./queries/reservation.queries');
const {CREATE_USERS_TABLE}= require('./queries/user.queries');
const query= require('./utils/query');

const host = process.env.DB_HOST || 'localhost'; //get the host from environment or use default
const user = process.env.DB_USER || 'root'; //get the user fo DB from environment or use default
const password = process.env.DB_PASS || 'password';
const database = process.env.DB_DATABASE || 'gbsh'; //this reverse to Golden Bike SHop database

module.exports= async(params)=>
new Promise(async(resolve, reject)=>{
    const con = mysql.createConnection({
    host,
    user,
    password,
    database
});

const userTableCreated= await query (con, CREATE_USERS_TABLE).catch(
    (err)=>{
        reject(err);
    }
);

const reservationTableCreated= await query (con, CREATE_RESERVATION_TABLE).catch(
    (err)=>{
        reject(err);
    }
);
if(!!userTableCreated && !! reservationTableCreated){
    resolve(con);
}
});
