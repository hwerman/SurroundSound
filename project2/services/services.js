require('dotenv').config();
const fetch = require('node-fetch');

//Joey Pinhas and Irwin Tsay helped me figure out this next line - as this is a specific functionality related to the TuneFind API
const { Client } = require('tunefind');
const API_URL = 'https://www.tunefind.com/api/v1/';

//HJW the consts here are needed because of the specific API
const user = process.env.TUNEFIND_USERNAME;
const pass = process.env.TUNEFIND_PASSWORD;
const client = new Client({});

// function filterQueryString (req, res, next){
//   const filterObject = {};
//   const quer = req.query;

//   if ('id' in quer) filterObject.id = new RegExp(`\\b${quer.id}`, 'i');

//   res.filteredQueryParams = filterObject;
//   return next();
// };

// function fixUrl(){
//   const $inputField = $('input');
//   $inputField.val().split('-').join(' ');
// }

//THE NEXT NINE LINES WORK TO GET ALL OF THE FILMS LISTED
//also searchSoundtrack and searchSong are based on the formatting of the built in functions for the tunefind API
//  function searchSoundtrack(req, res, next) {
//   console.log('operating');

//   client.movies(function (err, film) {
//     if (err) {
//       return console.log(err);
//     }
//     res.answers = film.movies;
//     return next();
//   })
//     .catch((err) => {
//       res.error = err;
//       next();
//     });
// }

function searchSong(req, res, next){
  console.log('song searching');
  console.log('query: ', req.body.cinema);

  client.movie(req.body.cinema)//client.movie(req.query.search) //HJW this points to the name of the input of the form in ejs file
    .then(function (film) {
      console.log(film.songs);
      console.log('film:', film);
    res.results = film.songs;
    return next();
})
    .catch(console.log.bind(console))
    // .catch((err) => {
    //   res.error = err;
    //   next();
    // })
}

module.exports = {
  // searchSoundtrack,
  searchSong,
  // filterQueryString,
  // fixUrl,
  // searchMovie,
  // searchSongs,
};

// function searchMusic(req, res, next) {
//   fetch(`${API_URL}term=${req.body.searchTerm}&entity=album&medium=music`)
//   .then(r => r.json())
//   .then((albums) => {
//     res.results = albums.results;
//     next();
//   })
//   .catch((err) => {
//     res.error = err;
//     next();
//   });
// }

// module.exports = { searchMusic }
