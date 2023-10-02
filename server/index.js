const express = require('express')
const app = express()
//app.use(express.static(__dirname + '/client/src/images'));
//app.use('/images', express.static(__dirname + '../../../client/src/images'));

//Access using "http://localhost:5000/api"
app.get("/api", (req, res) => {
	res.json({
		menu: [
		  { id: 1, name: 'Cheese', price: '10', img: '/cheese.png'},
		  { id: 2, name: 'Shrimp', price: '10', img: '/shrimp.png'},
		  { id: 3, name: 'Pepper', price: '10', img: '/pepper.png'},
		  { id: 4, name: 'Cheese agaib', price: '10', img: '/cheese.png'},
		  { id: 5, name: 'Youre telling me shrimp cooked this pizza?', price: '100', img: '/shrimp.png'}
		],
		users: [
		  { id: 1, username: 'Admin' },
		  { id: 2, username: 'Guest' },
		],
	  });
})

app.listen(5000, () => {console.log("Server running on port 5000")})