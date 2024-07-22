const sqlite3 = require('sqlite3').verbose(); // Import sqlite3

const db = new sqlite3.Database('mydatabase.db'); // Connect to the database

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

// Run this the second time you test your code
// Update data
//    db.run(
//      `UPDATE users SET email = 'john_new@example.com' WHERE username = 'john_doe'`
//    );
//    db.run(
//      `UPDATE users SET email = 'jane_new_smith@example.com' WHERE username = 'jane_smith'`
//   );
});

// Close the database connection
db.close();
