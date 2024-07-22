const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('mydatabase.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        age INTEGER
    )`);

  db.run(`DELETE FROM users`); // Clear any existing data

  db.run(
    `INSERT INTO users (username, email, age) VALUES ('john_doe', 'john@example.com', 25)`
  );
  db.run(
    `INSERT INTO users (username, email, age) VALUES ('jane_smith', 'jane@example.com', 30)`
  );
});

db.close();
