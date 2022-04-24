const {getAllReservation,getReservation,updateReservation,createReservation,deleteReservation} = require('../controllers/reservation.controllers');
const express = require('express');
const Router  = require('express');

const reservationRoutes = express.Router();
reservationRoutes.get('api/reservation/', getAllReservation).post('api/reservation/', createReservation);
reservationRoutes.get('api/reservation/:reservation_id', getReservation);
reservationRoutes.put('api/reservation/:reservation_id', updateReservation);
reservationRoutes.delete('api/reservation/:reservation_id', deleteReservation);
module.exports = reservationRoutes;