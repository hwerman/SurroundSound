require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const term = require('./models/model_1');
const term2 = require('./models/user');
const dbService = require('./services/api_1');

const app = express();
const PORT = process.argv[2] || process.env.PORT || 3000

const homeRoute = require('./routes/home');
// const mainRoute = require('./routes/main');
// const userRoute = require('./routes/user');

app.listen(PORT, () => console.warn('Server is listening on port ', PORT))

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view enginge', 'ejs');
app.set('views', 'views');

app.use('/', homeRoute);
// app.use('/main', mainRoute);
// app.use('/user', userRoute);

app.get('/', (req, res) =>{
  res.render('/', {
    banana: res.results
  })
})

