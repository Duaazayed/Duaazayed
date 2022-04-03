const con = require('../db-config');
const queries = require('../queries/reservation.queries');

exports.getAllReservation = function(req, res){
    con.query(queries.ALL_RESERVATION, function(err, result, fields){
        if(err){
            res.send(err);
        }
        res.json(result);
    });
};

exports.getReservation = function(req, res){
    con.query(queries.SINGLE_RESERVATION, [req.params.reservation_id],function(err, result){
        if(err){
            res.send(err);
        }
        res.json(result);
    });
};
exports.createReservation = function(req, res){
    con.query(queries.INSERT_RESERVATION, [req.body.username,req.body.bike_id, req.body.reservation_date, req.body.reservation_start_time, req.body.reservation_end_time], function(err, result){
        if(err){
            res.send(err);
        }
        console.log(result);
        res.json({ message: 'Reservation Created: ' + result.affectedRows });
    });
};
exports.updateReservation = function(req, res){
    con.query(
        queries.UPDATE_RESERVATION,
         [req.body.username, req.body.bike_id, req.body.reservation_date, req.body.reservation_start_time, req.body.reservation_end_time, req.params.reservation_id],
         function(err, data){
        if(err){
            res.send(err);
        }
        res.json(data);
    });
};

exports.deleteReservation = function(req, res){
    con.query(queries.DELETE_RESERVATION,[req.params.reservation_id], function(err){
        if(err){
            res.send(err);
        }
        
        res.json({ message : 'Deleted succussfully.'});
    });
};