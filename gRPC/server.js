var grpc = require('grpc')
var proto = grpc.load('books.proto')

var booksArr = [
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

var server = new grpc.Server()

server.addService(proto.BookService.service, {
	books: (_, callback) => {
		callback(null, booksArr)
	},
})

server.bind('localhost:3001',
	grpc.ServerCredentials.createInsecure())

console.log("Server running on port 3001")
 
server.start()