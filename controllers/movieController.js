// importo il db
const connection = require("../data/db");

// INDEX
const index = ((req, res) => {
    connection.query("SELECT * FROM movies;", (err, movieResults) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" + err })
        }
        res.json(movieResults);
    })
})

// SHOW
const show = ((req, res) => {
    res.send("Dettaglio film");
})

module.exports = {
    index,
    show
}