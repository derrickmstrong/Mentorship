const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('may-database.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        age INTEGER
    )`);

    db.run(`DELETE FROM users`); // Clear any existing data

    db.run(`INSERT INTO users (username, email, age) VALUES ('john_doe', 'john@example.com', 25)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('jane_smith', 'jane@example.com', 30)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('maymunah03', 'may.hicks@alloy.digital', 21)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('bobjones82', 'bob.jones@example.com', 34)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('emjohn28', 'emily.johnson@example.com', 28)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('sarahb25', 'sarah.brown@example.com', 19)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('dwilson30', 'david.wilson@example.com', 30)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('jtaylor27', 'jessie.taylor@example.com', 27)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('mattyd22', 'matt.davis@example.com', 22)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('amartinez24', 'amanda.martinez@example.com', 24)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('landerson45', 'laura.anderson@example.com', 45)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('jlee52', 'james.lee@example.com', 52)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('uwaisd', 'uwais.durecout@example.com', 12)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('fateemahs', 'fateemah.sesay@example.com', 9)`);

});

db.close();