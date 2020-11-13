const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating the Schema of how data is going to be stored
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    }, 
    body: {
        type: String,
        required: true
    }
}, { timestamps: true});

// Creating the model of where we want our schema to connect to document in our database
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
