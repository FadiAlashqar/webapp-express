// importo mwsql
const mysql = require("mysql2");

// cre i parametri per la connesione
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

// creo la connessione
connection.connect((err) => {
    if (err) {
        console.log("Connection to mySQL failed ")
    }
    console.log("Connected to mySQL!")
});

module.exports = connection;