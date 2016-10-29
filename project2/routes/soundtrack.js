const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { searchSoundtrack,
        searchSongs }     = require('../services/services');
const { getFavorites,
        saveFavorites,
        deleteFavorites } = require('../models/favorites');

router.get('/', authenticate, getFavorites, (req, res) => {
  res.render('soundtrack/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || []
  });
});

router.post('/search', authenticate, searchSoundtrack, getFavorites, (req,res) => {
  res.render('soundtrack/index', {
    user: res.user,
    results: res.results || [],
    favorites: res.favorites || [],
  });
});

router.delete('/favorites/:id', deleteFavorites, (req, res) => {
  res.redirect('/soundtrack');
});

router.post('/favorites', saveFavorites, (req, res) => {
  res.redirect('/soundtrack');
});

module.exports = router;
