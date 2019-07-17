const express = require('express');
const app = express();

const pokemon = require('./models/pokemon');

app.use(express.static('./public'));//style app

app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
	pokemon: pokemon
})
})

app.get('/pokemon/:index', (req, res) => {
	res.render('show.ejs', {
		pokemones: pokemon[req.params.index]
	})
})

app.listen(3000, function() {
  console.log('my server is listening for client requests on port 3000;')
})

