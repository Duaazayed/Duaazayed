    
    exports.CREATE_TASKS_TABLE = `CREATE TABLE users(
    user_id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL UNIQUE,
    email varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (user_id);
    )`;

   // exports.ALL_TASKE = `SELECT * FROM tasks`;
   // exports.SINGLE_TASKS= `SELECT * FROM tasks WHERE id = ?`;
    exports.INSERT_NEW_USER= `INSERT INTO users (username, email, password) VALUES(?, ?, ?)`;
    exports.UPDATE_USER= `UPDATE users SET username = ?, email = ?, password= ? WHERE user_id= ?`;
    //exports.DELETE_TASK= `DELETE FROM tasks WHERE id= ?`;
