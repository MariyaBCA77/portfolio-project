const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
//Test route (fixes "Cannot Get /")
app.get('/', (req, res) => {
    res.send("Backend is running ✅");
});

// ✅ MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tiger", // change if you have password
    database: "portfolio_db"
});

// connect to MySQL
db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL ✅");
    }
});

// ✅ UPDATED API (store data)
app.post('/contact', (req, res) => {

    const { name, email } = req.body;

    const sql = "INSERT INTO contacts (name, email) VALUES (?, ?)";

    db.query(sql, [name, email], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ message: "Error saving data" });
        } else {
            res.json({ message: "Data saved successfully ✅" });
        }
    });

});

// Start server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
