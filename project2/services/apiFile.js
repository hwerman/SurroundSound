require('dotenv').config();

const fetch = require('node-fetch');

const { Client } = require('tunefind');

const tuneFindUrl = 'https://www.tunefind.com/api/v1/movies';

function searchSoundtrack(req, res, next) {
  console.log('haaaay')
  const user = process.env.TUNEFIND_USERNAME;
  const pass = process.env.TUNEFIND_PASSWORD;

  const client = new Client({});

client.movies(function (err, movies){
  if (err) {
    return console.log(err);
  }
  // console.log(res.result);
  res.results = movies.movies;
  return next();
  // console.log(res.results);
  // console.log(movies)
});
}

// // .then (r=> r.json());
// function searchSoundtrack(req, res, next) {
//   console.log('haaaay')
// // name of input in form in ejs files
// fetch('https://www.tunefind.com/api/v1/movies')
//   .then((getData) => {
//     return getData.json();
//   }).then((json)=>{
//     console.log('json:', json);
//     res.results = json;
//     next();
//   });
// }

// function searchSoundtrack(req, res, next) {
//   console.log('haaaay')
// // name of input in form in ejs files
//   fetch('https://www.tunefind.com/api/v1/show_name/alias')
//   // .then (r=> r.json())
//   .then ((result) => {
//     res.result = result
//     console.log('s club')
//     console.log(res.result)
//     next();
//   })
// }

//  // .then(r => r.json())
 //  .then((result) => {
 //    res.weather = result;
 //    next();
 //  })


// function searchSoundtrack(req, res, next) {
//   console.log('haaaay')
// name of input in form in ejs files
// fetch('https://www.tunefind.com/api/v1/show?term=alias')
//   .then((getData) => {
//     return getData.json();
//   }).then((json)=>{
//     console.log('json:', json);
//     res.results = json;
//     next();
//   });
// }




 // client.movie('Fear')
 // .then(function(movie){
 //  console.log(movie)
 // })
 // .catch(console.log.bind(console))

//   const auth = 'Basic' + new Buffer(user + ':' + pass).toString('base64');

// // name of input in form in ejs files
//   fetch('https://www.tunefind.com/api/v1/movie', {
//     method: 'GET',
//     headers: {
//       'Authorization': auth,
//     },
//   })
  // .then (r=> r.json())
//   .then ((result) => {
//     res.result = result
//     console.log('s club')
//     console.log(res.result)
//     next();
//   })
// next();


 // .then(r => r.json())
 //  .then((result) => {
 //    res.weather = result;
 //    next();
 //  })

module.exports = {
  searchSoundtrack,
};
