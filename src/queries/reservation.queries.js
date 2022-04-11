exports.CREATE_RESERVATION_TABLE = `CREATE TABLE reservation(
    reservation_id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    bike_id int NOT NULL,
    reservation_date date NOT NULL,
    reservation_start_time time NOT NULL,
    reservation_end_time time NOT NULL,
    PRIMARY KEY (reservation_id);
    )`;
    exports.ALL_RESERVATION = `SELECT * FROM reservation`;
    exports.SINGLE_RESERVATION= `SELECT * FROM reservation WHERE reservation_id = ?`;
    exports.INSERT_RESERVATION= `INSERT INTO reservation (username) VALUES(?)`;
    exports.UPDATE_RESERVATION= `UPDATE reservation SET reservation_date date = ?, reservation_start_time = ?, reservation_end_time = ?  WHERE reservation_id= ?`;
    exports.DELETE_RESERVATION= `DELETE FROM reservation WHERE reservation_id= ?`;