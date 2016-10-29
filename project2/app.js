const dotEnv          = require('dotenv').config({silent: true});

const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const cookieParser = require('cookie-parser');
const session = require('express-session');

const router = require('./routes/index.js');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');
const soundtrackRouter = require('./routes/soundtrack');
// const searchRouter = require()

const dbService = require('./services/services');

const app = express();
const SECRET = 'tacos3000';
const PORT = process.argv[2] || process.env.PORT || 3000;

// const homeRoute = require('./routes/')
// const searchRoute = require('./routes/search');
// const userRoute = require('./routes/member');

app.listen(PORT, () => console.warn('Server is listening on port ', PORT));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET,
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/soundtrack', soundtrackRouter);
