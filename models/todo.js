const mongoose = require("mongoose");

////this is schema means defining structure of your data.
const TodoSchema = new mongoose.Schema({
    name: {type:String, required: true, maxLength:50 },
    status: {type:Boolean, required: true},
});
module.exports = mongoose.model("Todo", TodoSchema);