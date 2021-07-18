var express = require("express");
var axios = require("axios");

var app = express();
app.listen(3000, () => {
 console.log("Client running on port 3000");
});

app.get("/books", async (req, res, next) => {
	var start = Date.now();
	var data;
	try {
		var response = await axios.get('http://localhost:3001/books');
		data = response.data;
	} catch(err){
		console.log("Downstream error");
		data = "Error";
	}
	var stop = Date.now();
	console.log(`Time taken: ${stop-start} ms`);
	res.json(data);
});