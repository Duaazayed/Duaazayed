const mysql = require('mysql');
const connection = require('../db-config');
const { 
ALL_RESERVATION,
SINGLE_RESERVATION,
INSERT_RESERVATION,
UPDATE_RESERVATION,
DELETE_RESERVATION
} = require('../queries/reservation.queries');
const query= require('../utils/query');
const {serverError}= require('../utils/handlers');

exports.getAllReservation = async (req, res) =>{
    const con = await connection().catch((err) => {
        throw err;
    });
    const reservation = await query(con, ALL_RESERVATION(req.user.id)).catch(
        serverError(res)
    );
    if(!reservation.length) {
        res.status(400).json({msg: 'No reservations available for this user'});
    }
    res.json(reservation);
};
    

exports.getReservation = async (req, res)=>{
    const con = await connection().catch((err) => {
        throw err;
    });
    const reservation = await query(con, SINGLE_RESERVATION(req.user.id, req.params.reservation_id)).catch(
        serverError(res)
    );
    if(!reservation.length) {
        res.status(400).json({msg: 'No reservations available for this user'});
    }
    res.json(reservation);
};
  
exports.createReservation = async(req, res)=>{
    const user = req.user;
    if( user.id){
        const con = await connection().catch((err) => {
            throw err;
        });
        const reservationUserName= mysql.escape(req.body.username);
        const result= await query(con, INSERT_RESERVATION(user.id, reservationUserName)).catch(serverError(res));
        if(result.affectedRows !==1){
            res.status(500)
            .json({msg: `Unable to add reservation: ${req.body.username}`});
        }
        res.json({ msg: 'Added reservation succesfully'});
    }
};
const _buildValuesString = (req) =>{
    const body=req.body;
    const values = Object.keys(body).map(
        (key) => `${key} = ${mysql.escape(body[key])}`
    );
    values.push(`reservation_date = NOW()`);
    values.join(', ');
    return values;
};

exports.updateReservation = async(req, res)=>{
    const con = await connection().catch((err) => {
        throw err;
    });
    const values = _buildValuesString(req);
    const result = await query(
        con,UPDATE_RESERVATION(req.user.id, req.params.reservation_id, values)).catch(serverError(res));
        if(result.affectedRows !==1){
            res
            .status(500)
            .json({ msg: `Unable to update reservation: '${req.body.username}'`});
        }
        res.json(result);
        };

exports.deleteReservation = async (req, res)=>{
    const con = await connection().catch((err) => {
        throw err;
    });
    const result= await query(con, DELETE_RESERVATION(req.user.id, req.params.reservation_id)).catch(serverError(res));

    if(result.affectedRows !==1){
            res
            .status(500)
            .json({ msg: `Unable to delete reservation at: ${req.params.reservation_id}`});
        }
        res.json({ msg: 'Deleted succesfully'});
 };
