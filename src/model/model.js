const mongoose = require('mongoose');
const { stringify } = require('querystring');

const bookSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	publishedDate: {
		type: String,
	},
	genres: {
		type: String,
	},
	Authors: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Author",
	}
	
});
const authorSchema = new mongoose.Schema({
	name: {
		type:String,
	},
	year: {
		type: Number
	},
	books: [{
		type: mongoose.Schema.Types.ObjectId,
		ref:"Book"
	}]
	
	
})

let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorSchema)
module.exports = { Book , Author};