const express = require("express");
const { connectToMongoDB } = require("./db")
const bookRoute = require("./routes/book")
require('dotenv').config();

const PORT = process.env.PORT;
console.log("PORT from .env:", process.env.PORT);



const app = express();

// Connecting to MongoDB instance
connectToMongoDB()

app.use(express.json())

app.use("/books",bookRoute)

app.get("/", (req,res) => {
    res.send("Welcome Home!")
})

app.listen(PORT, () => {
    console.log(`Server started successfully on PORT: http://localhost:${PORT}`)
});

