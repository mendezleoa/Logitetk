var express = require('express');
var path = require('path');
const bd = require('./models/emails');
const cors = require('cors');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}))

app.use(express.json({
  type:"*/*"
}))

app.use(bodyParser.json())
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname)))

module.exports = app;