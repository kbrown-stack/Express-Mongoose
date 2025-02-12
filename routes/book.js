const express = require("express");
const BookModel = require("../model/book")

const bookRoute = express.Router()

// Note CRUD will be happening here => CREATE, READ , UPDATE AND DELETE

//READ = GET

bookRoute.get("/", (req,res) => {
    BookModel.find({})
    .then((books) => {
        res.status(200).send(books)
    }).catch((err) => {
        console.log(err)
        res.status(500).send(err)
    })
    // return all books
    // res.send("Books Route")
})

// READ BY ID 

bookRoute.get("/:id", (req,res) => {
    const id = req.params.id
    console.log(id)
    BookModel.findById(id)
    .then((book) => {
        res.status(200).send(book)
    }).catch((err) => {
        console.log(err)
        res.status(400).send(err)
    })
    // find and return books by id
    // res.send("Get Books by ID")
})



//CREAT= POST

bookRoute.post("/", (req, res) => {
    const books = req.body
    console.log(books)

    BookModel.create(books)
.then((book) => {
    res.status(201).send({
        message: "Book Added Successully",
        data: book
    })
}).catch((err) => {
    res.status(400).send(err)
})
    // Adding the book to database 

    // res.send("Books Added")
})


//UPDATE = PUT

bookRoute.put("/:id", (req, res) => {
    const id = req.params.id
    const book = req.body

    BookModel.findByIdAndUpdate(id,book, {new: true})
    .then((book) => {
        res.status(200).send(book)
    }).catch((err) => {
        console.log(err)
        res.status(400).send(err)
    })
    // console.log(" Updating Book with id" + id)

    // Perform update to the book in the database 

    // res.send("Books Updated")
})

//DELETE = DELETE

bookRoute.delete("/:id", (req, res) => {
    const id = req.params.id
    BookModel.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({
            message: "Deletion successful",
            data: ""
        })
    }) .catch((err) => {
        console.log(err)
        res.status(400).send(err)
    })
    // console.log(" Deleting Book with id" + id)

    // Perform delete to the book in the database 

    // res.send("Books Deleted")
})



module.exports = bookRoute