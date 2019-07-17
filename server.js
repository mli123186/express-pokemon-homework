//pokemon

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

const pokemon = require('./models/pokemon');

app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(express.static('./public'));//style app
//new pokeon
app.post('/pokemon', (req, res) => {
  console.log(req.body);
  pokemon.push(req.body);
  res.redirect('/pokemon')
});
app.get('/pokemon/new', (req, res) => {
  res.render('new.ejs')
});

app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
	pokemon: pokemon
})
})

//edit pokemon
app.get('/pokemon/:index/edit', (req, res) => {
	res.render('edit.ejs', {
		pokemon: pokemon[req.params.index],
		index: req.params.index
	})
})

app.put('/pokemon/:index', (req, res)=> {
	pokemon[req.params.index] = req.body;
	res.redirect('/pokemon');
})
//delete pokemon
app.delete('/pokemon/:index', (req, res) => {
 
  pokemon.splice(req.params.index, 1); //remove the item from the array
  res.redirect('/pokemon');  //redirect back to index route
});
//show pokemon
app.get('/pokemon/:index', (req, res) => {
	res.render('show.ejs', {
		pokemones: pokemon[req.params.index]
	})
})

app.listen(3000, function() {
  console.log('my server is listening for client requests on port 3000;')
})

