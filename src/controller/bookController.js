const { Book, Author } = require('../model/model');

const bookController = {
	addBook: async (req, res) => {
		try {
			const newBook = new Book(req.body);
			const saveBook = await newBook.save();
			if (req.body.Author) {
				const author = Author.findById(req.body.author);
				await author.updateOne({ $push: { books: saveBook._id } });
			}
			res.status(200).json(saveBook);
		}
		catch(err) {
			res.status(500).json(err)
		}
	},
	getBook: async (req, res) => {
		try {
			const saveBook = await Book.find();
			res.status(200).json(saveBook);
		}
		catch(err) {
			res.status(500).json(err)
		}
	},
	updateBooks: async (req, res) => {
		try {
			const updateBook = await Book.findById(req.params.id);
			await updateBook.updateOne({ $set: req.body })
			res.status(200).json("update succcessfully")
		}
		catch (err) {
			res.status(500).json(err);
		}
	}
	
}
module.exports = bookController;
