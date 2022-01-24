var express = require('express');
var router = express.Router();
const request = require('request');
const API_KEY = '1fb720b97cc13e580c2c35e1138f90f8';
const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${API_KEY}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

/* GET home page. */
router.get('/', function (req, res, next) {
  const movie = request.get(nowPlayingUrl, (err, response, movie) => {
    const parsedData = JSON.parse(movie)

    res.render('index', {
      categories: ['Movie', 'Person'], 
      title: 'The new IMDB',
      movies: parsedData.results,
      imageBaseUrl
    })

  })
  //res.render('index', { categories : ['Movie','Person'], title:'The new IMDB' });
});

module.exports = router;
