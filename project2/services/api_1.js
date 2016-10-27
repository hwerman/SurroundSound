const fetch = require('node-fetch');

const tuneFindUrl = 'https://www.tunefind.com/api/v1/show?term=alias';

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

function searchSoundtrack(req, res, next) {
  console.log('haaaay')
// name of input in form in ejs files
  fetch('https://www.tunefind.com/api/v1/show_name/alias')
  // .then (r=> r.json())
  .then ((result) => {
    res.result = result
    console.log('s club')
    console.log(res.result)
    next();
  })
}

 // .then(r => r.json())
 //  .then((result) => {
 //    res.weather = result;
 //    next();
 //  })

module.exports = {
  searchSoundtrack,
};
