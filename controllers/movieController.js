// importo il db
const connection = require("../data/db");

// INDEX
const index = ((req, res) => {
    res.send("Elenco dei miei film");
})

// SHOW
const show = ((req, res) => {
    res.send("Dettaglio film");
})

module.exports = {
    index,
    show
}