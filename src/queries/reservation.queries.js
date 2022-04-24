exports.CREATE_RESERVATION_TABLE = `CREATE TABLE IF NOT EXISTS reservation(
    reservation_id int NOT NULL AUTO_INCREMENT,
    user_id int NOT NULL,
    username varchar(255) NOT NULL,
    bike_id int NOT NULL,
    reservation_date date NOT NULL,
    reservation_start_time time NOT NULL,
    reservation_end_time time NOT NULL,
    PRIMARY KEY (reservation_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
    ON UPDATE CASCADE
    ON DELETE CASCADE
    )`;
    exports.ALL_RESERVATION = (user_id)=>`SELECT * FROM reservation WHERE user_id= ${user_id}`;

    exports.SINGLE_RESERVATION= (user_id, reservation_id)=>`SELECT * FROM reservation WHERE reservation_id =${reservation_id} AND user_id= ${user_id}`;
    exports.INSERT_RESERVATION= (user_id, bike_id, reservation_date, reservation_start_time, reservation_end_time) => `INSERT INTO reservation (user_id, bike_id, reservation_date, reservation_start_time, reservation_end_time) VALUES(${user_id}, ${bike_id},${reservation_date}, ${reservation_start_time}, ${reservation_end_time})`;
    exports.UPDATE_RESERVATION= (user_id, reservation_id, newValues) =>`UPDATE reservation SET ${newValues} WHERE user_id= ${user_id}  AND reservation_id = ${reservation_id}`;
    exports.DELETE_RESERVATION= (user_id, reservation_id, bike_id) => `DELETE FROM reservation WHERE user_id= ${user_id} AND reservation_id= ${reservation_id} AND bike_id=${bike_id}`;