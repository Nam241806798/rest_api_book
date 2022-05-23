const  { Book , Author} = require('../model/model');


const authorController = {
	addAuthor: async (req, res) => {
		try {
			const newAuthor = new Author(req.body);
			const saveAuthor = await newAuthor.save()
			res.status(200).json(saveAuthor);
		} catch (err) {
			res.status(500).json(err)
		}
	},
	getAuthor: async (req, res) => {
		try {
			
			res.status(200).json(await Author.find());
		} catch (err) {
			res.status(500).json(err)
		}
	},
	getIDbook: async (req, res) => {
		try {
			const findBook = await Author.findById(req.params.id).populate("books");
			res.status(200).json(findBook);

		}
		catch (err) {
			res.status(500).json(err)
		}
	},
	updateAuthorS: async (req, res) => {
		try {
			const updateAuthor = await Author.findById(req.params.id);
			await updateAuthor.updateOne({ $set: req.body })
			res.status(200).json("update succcessfully")
		}
		catch (err) {
			res.status(500).json(err);
		}
	}
}


	


module.exports =  authorController;