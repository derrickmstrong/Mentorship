const sqlite3 = require('sqlite3').verbose();

// Connect to the database (or create it if it doesn't exist)
const db = new sqlite3.Database('may-database.db');

// Create tables
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT NOT NULL,
        age INTEGER
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS orders (
        order_id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        order_date TEXT,
        amount REAL,
        FOREIGN KEY (user_id) REFERENCES users(user_id)
    )`);
});

// Insert data
const insertData = () => {
    db.run(`INSERT INTO users (username, email, age) VALUES ('john_doe', 'john@example.com', 25)`);
    db.run(`INSERT INTO users (username, email, age) VALUES ('jane_smith', 'jane@example.com', 30)`);
    db.run(`INSERT INTO orders (user_id, order_date, amount) VALUES (1, '2023-07-01', 99.99)`);
    db.run(`INSERT INTO orders (user_id, order_date, amount) VALUES (2, '2023-07-02', 149.99)`);
};

// Read data
const readData = () => {
    db.all('SELECT * FROM users', (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('Users:', rows);
    });

    db.all('SELECT * FROM orders WHERE user_id = 1', (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('Orders for user_id = 1:', rows);
    });
};

// Update data
const updateData = () => {
    db.run(`UPDATE users SET email = 'john_new@example.com' WHERE username = 'john_doe'`);
    db.run(`UPDATE orders SET amount = 129.99 WHERE order_id = 2`);
};

// Delete data
const deleteData = () => {
    db.run(`DELETE FROM users WHERE username = 'john_doe'`);
    db.run(`DELETE FROM orders WHERE order_id = 1`);
};

// Function to close the database
const closeDatabase = () => {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Closed the database connection.');
    });
};

// Interact with the database
db.serialize(() => {
    insertData();
    readData();
    updateData();
    deleteData();
    readData();
    closeDatabase();
});