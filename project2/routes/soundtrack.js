const router               = require('express').Router();
const { authenticate }     = require('../lib/auth');
const { searchSoundtrack } = require('../services/services');
const { searchSong }       = require('../services/services');
const { getFavorites,
        saveFavorites,
        deleteFavorites } = require('../models/favorites');

router.get('/', authenticate, (req, res) => {
  res.render('soundtrack/main', {
    user: res.user,
    tracks: res.results || [],
    results: res.results || [],
    favorites: res.favorites || [],
  });
})

router.post('/search', authenticate, searchSong, getFavorites, (req, res) => {
  res.render('soundtrack/ost', {
    user: res.user,
    tracks: res.results || [],
    results: res.results || [],
    favorites: res.favorites || [],
  });
});

// router.post('/search', authenticate, searchSoundtrack, searchSong, getFavorites, (req, res) => {
//   res.render('soundtrack/ost', {
//     user: res.user,
//     tracks: res.results || [],
//     films: res.answers || [],
//     favorites: res.favorites || [],
//   });
// });

router.post('/favorites', saveFavorites, (req, res) => {
  res.redirect('/soundtrack');
  //^points to the ROUTE soundtrack and not the view soundtrack
});

router.delete('/favorites/:id', deleteFavorites, (req, res) => {
  res.redirect('/soundtrack');
});



module.exports = router;
