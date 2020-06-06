//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const connexion = require('./database/db')

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const items = ['Buy Food', 'Cook Food', 'Eat Food'];
const workItems = [];

app.get('/', function (req, res) {
	const day = date.getDate();

	res.render('list', { listTitle: day, newListItems: items });
});

app.post('/', function (req, res) {
	const item = req.body.newItem;

	if (req.body.list === 'Work') {
		workItems.push(item);
		res.redirect('/work');
	} else {
		items.push(item);
		res.redirect('/');
	}
});

app.get('/work', function (req, res) {
	res.render('list', { listTitle: 'Work List', newListItems: workItems });
});

app.get('/about', function (req, res) {
	res.render('about');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
	console.log(`Server started on port ${PORT}`);
});
