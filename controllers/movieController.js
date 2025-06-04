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
    const id = req.params.id;

    const bookSql = "SELECT * FROM movies WHERE id = ?"

    const reviewSql = "SELECT * FROM reviews WHERE movie_id = ?"

    connection.query(bookSql, [id], (err, movieResults) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" + err })
        }
        const movie = movieResults[0];

        connection.query(reviewSql, [id], (err, reviewResults) => {
            if (err) {
                return res.status(500).json({ error: "Database query failed" + err })
            }
            movie.reviews = reviewResults;

            res.json(movie);
        })
    })



})


const storeReview = (req, res) => {

    const { id } = req.params

    const { name, vote, text } = req.body

    const reviewSql = "INSERT INTO reviews (name, vote, text, movie_id) VALUES (?, ?, ?, ?);"

    connection.query(reviewSql, [name, vote, text, id], (err, result) => {
        if (err) {
            return console.error("Errore nel DB:", err); res.status(500).json({ error: "Database query failed" });
        }

        res.status(201).json({ message: "Recensione inserita con successo", id: result.insertId });
    })
}

module.exports = {
    index,
    show,
    storeReview
}