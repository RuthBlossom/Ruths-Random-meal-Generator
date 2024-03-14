//This is my index.js server file where I set up routes, middleware, & start my server.

const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');

// Define routes
app.get('/', (req, res) => {
	res.render('index', { meal: null }); // Pass null initially
});

app.get('/get-meal', async (req, res) => {
	try {
		const response = await axios.get(
			'https://www.themealdb.com/api/json/v1/1/random.php'
		);
		const meal = response.data.meals[0];
		res.render('index', { meal });
	} catch (error) {
		console.error(error);
		res.status(500).send('An error occurred');
	}
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


