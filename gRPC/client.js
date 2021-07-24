const grpc = require('grpc')
const express = require("express");

const BookService = grpc.load('books.proto').BookService

const client = new BookService('localhost:3001',
	grpc.credentials.createInsecure())

const app = express();
app.listen(3000, () => {
 console.log("Client running on port 3000");
});


app.get("/books",  (req, res, next) => {
	let start = Date.now()
	client.books({}, (error, books) => {
		if(!error) {
			let stop = Date.now()
			console.log(`Time taken: ${stop-start} ms`);
			res.json(books)
		} else{
			let stop = Date.now()
			console.log(`Time taken: ${stop-start} ms`);
			res.json("Error")
		}
	})

});

