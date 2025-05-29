// importo express
const express = require("express");

// inizializzo express in una variabile
const app = express();

// dichiaro la porta nella variabile
const port = process.env.SERVER_PORT || 3000;

// middleware asset statici
app.use(express.static("public"));

// middlware parsing
app.use(express.json());

// importo il router
const movieRouter = require("./routers/movieRouter");

app.use("/api/movie", movieRouter);

// dichiaro la rotta base 
app.get("/", (req, res) => {
    res.send("Film's Server");
})

// tengo in ascolto il server 
app.listen(port, () => {
    console.log(`Servere listening on port : ${port}`)
})