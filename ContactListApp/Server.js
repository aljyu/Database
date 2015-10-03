var express = require("express");
var app = express();

//"static" means HTML, CSS, and JS files
app.use(express.static(__dirname + "/HTML"));

app.get("/contactlist", function(req, res) {
	console.log("I received a GET request")
	person1 = {
		name: "Tim",
		email: "tim@email.com",
		number: "(111) 111 - 1111"
	};
	person2 = {
		name :"Emily",
		email: "emily@email2.com",
		number: "(222) 222 - 2222"
	};
	person3 = {
		name: "John",
		email: "john@email3.com",
		number: "(333) 333 - 3333"
	};
	var contactlist = [person1, person2, person3];
	//Responds to the GET request by sending back the contactlist data in a json format
	res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");