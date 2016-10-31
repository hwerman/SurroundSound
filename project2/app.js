const dotEnv          = require('dotenv').config({silent: true});

const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride = require('method-override');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const indexRouter = require('./routes/index.js');
const authRouter = require('./routes/auth.js');
const usersRouter = require('./routes/users.js');
const soundtrackRouter = require('./routes/soundtrack.js');

const dbService = require('./services/services');

const app = express();
const SECRET = 'hollywood';
const PORT = process.argv[2] || process.env.PORT || 3000;

app.listen(PORT, () => console.warn('Server is listening on port ', PORT));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET,
}));

app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/soundtrack', soundtrackRouter);
