var grpc = require('grpc')
var express = require("express");

var BookService = grpc.load('books.proto').BookService

var client = new BookService('localhost:3001',
	grpc.credentials.createInsecure())

var app = express();
app.listen(3000, () => {
 console.log("Client running on port 3000");
});


app.get("/books",  (req, res, next) => {
	var start = Date.now()
	client.books({}, (error, books) => {
		if(!error) {
			var stop = Date.now()
			console.log(`Time taken: ${stop-start} ms`);
			res.json(books)
		} else{
			var stop = Date.now()
			console.log(`Time taken: ${stop-start} ms`);
			res.json("Error")
		}
	})

});

