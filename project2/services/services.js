require('dotenv').config();

const fetch = require('node-fetch');

//Joey Pinhas and Irwin Tsay helped me figure out this next line - as this is a specific functionality related to the TuneFind API
const { Client } = require('tunefind');
const tuneFindUrl = 'https://www.tunefind.com/api/v1/movie';

//HJW the consts here are needed because of the specific API
const user = process.env.TUNEFIND_USERNAME;
const pass = process.env.TUNEFIND_PASSWORD;
const client = new Client({});

//THE NEXT FIFTEEN LINES ARE WORKING
 function searchSoundtrack(req, res, next){
  console.log('operating');

  // client.movies(function (err, movies){
  //   if (err) {
  //     return console.log(err);
  //   }
  //   res.answers = movies.movies;
  //   return next();
  // });
client.movie('enchanted')//client.movie(req.query.search) //HJW this points to the name of the input of the form in ejs file
  .then(function (film){
    console.log(film.songs)
    res.results = film.songs;
    return next();
  })
  .catch(console.log.bind(console));
}




module.exports = {
  searchSoundtrack,
  // searchMovie,
  // searchSongs,
};
