const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookModelSchema = new Schema({
title: {
    type: String,
    required: true,
},
year: {
    type: Number,
    required: true,
    max: [2025, 'Year must be less than or equal to 2025']

},

isbn: {
    type: String,
    required: true
},

createdAt: {
    type: Date,
    default: Date.now()
},

updatedAt: {
type: Date,
default: Date.now()
},

author: {
    type: String,
    required: true
},

description: {
    type: String
}

})

module.exports = mongoose.model("books",  BookModelSchema )