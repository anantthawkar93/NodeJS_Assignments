const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    name: {type: String, required: true, maxLength: 100},
    description: {type: String, required: true, maxLength: 500},
    author: { type: mongoose.Schema.objectId, ref:"Author", required: true }
});
module.exports = mongoose.model("Book", BookSchema);