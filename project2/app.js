require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const member = require('./models/model');
const guest = require('./models/user');
const dbService = require('./services/apiFile');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000;

const homeRoute = require('./routes/home');
// const mainRoute = require('./routes/main');
// const userRoute = require('./routes/user');

app.listen(PORT, () => console.warn('Server is listening on port ', PORT));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', homeRoute);
// app.use('/main', mainRoute);
// app.use('/user', userRoute);
