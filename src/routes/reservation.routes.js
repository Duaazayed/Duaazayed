const controllers = require('../controllers/reservation.controllers');
const express = require('express');
const Router  = require('express');

const reservationRoutes = express.Router();
reservationRoutes.get('/', controllers.getAllReservation).post('/', controllers.createReservation);
reservationRoutes.get('/:reservation_id', controllers.getReservation);
reservationRoutes.put('/:reservation_id', controllers.updateReservation);
reservationRoutes.delete('/:reservation_id', controllers.deleteReservation);
module.exports = reservationRoutes;