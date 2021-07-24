const express = require("express");
const axios = require("axios");

const app = express();
app.listen(3000, () => {
 console.log("Client running on port 3000");
});

app.get("/books", async (req, res, next) => {
	let start = Date.now();
	let data;
	try {
		let response = await axios.get('http://localhost:3001/books');
		data = response.data;
	} catch(err){
		console.log("Downstream error");
		data = "Error";
	}
	let stop = Date.now();
	console.log(`Time taken: ${stop-start} ms`);
	res.json(data);
});