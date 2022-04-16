const mongoose = require('mongoose');

const NewUserSchema = new mongoose.Schema({
		username: { type: String , required : true, minLength: 20, maxLength:50	},
		password: { type: String , required : true, minLength: 8, maxLength:20	},
		date_of_creation : { type: Date, required: true	},
	});

module.exports = mongoose.model("User", NewUserSchema);
