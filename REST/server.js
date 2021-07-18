var express = require("express");

var app = express();
app.listen(3001, () => {
 console.log("Server running on port 3001");
});

var books = {
	"Books" : [
					{
						"Title" : "Harry Potter and the Deathly Hallows",
						"Author" : "Rowling, J.K.",
						"Genre": "Children's Fiction"
					},
					{
						"Title" : "Harry Potter and the Philosopher's Stone",
						"Author" : "Rowling, J.K.",
						"Genre": "Children's Fiction"
					},
					{
						"Title" : "Harry Potter and the Order of the Phoenix",
						"Author" : "Rowling, J.K.",
						"Genre": "Children's Fiction"
					},
					{
						"Title" : "Harry Potter and the Goblet of Fire",
						"Author" : "Rowling, J.K.",
						"Genre": "Children's Fiction"
					},
					{
						"Title" : "Harry Potter and the Chamber of Secrets",
						"Author" : "Rowling, J.K.",
						"Genre": "Children's Fiction"
					},
					{
						"Title" : "Harry Potter and the Prisoner of Azkaban",
						"Author" : "Rowling, J.K.",
						"Genre": "Children's Fiction"
					},
					{
						"Title" : "Harry Potter and the Half-blood Prince:Children's Editionn",
						"Author" : "Rowling, J.K.",
						"Genre": "Children's Fiction"
					},
					{
						"Title" : "Fifty Shades of Grey",
						"Author" : "Random House",
						"Genre": "Romance & Sagas"
					},
					{
						"Title" : "Angels and Demons",
						"Author" : "Brown, Dan",
						"Genre": "Crime, Thriller & Adventure"
					},
					{
						"Title" : "Twilight",
						"Author" : "Meyer, Stephenie",
						"Genre": "Young Adult Fiction"
					},
					{
						"Title" : "Girl with the Dragon Tattoo,The:Millennium Trilogy",
						"Author" : "Larsson, Stieg",
						"Genre": "Crime, Thriller & Adventure"
					}
				]
};

app.get("/books", (req, res, next) => {
 	res.json(books);
});