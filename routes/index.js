var express = require("express");
var router = express.Router();
const api = require("../api/api");
const imageBaseUrl = "http://image.tmdb.org/t/p/w300";

/* GET home page. */
router.get("/", async function (req, res, next) {
  const movies = await api.getNowPlaying("/movie/now_playing");
  console.log(movies.results);
  res.render("index", {
    categories: ["Movie", "Person"],
    title: "The new IMDB",
    movies: movies.results,
    imageBaseUrl,
  });
});

router.get("/movie/:movieId", async function (req, res) {
  const movieId = parseInt(req.params.movieId);
  const { results } = await api.getNowPlaying("/movie/now_playing");
  const [movieRequired] = results.filter((movie) => movie.id === movieId);
  res.render("single-movie", {
    categories: ["Movie", "Person"],
    movie: movieRequired,
    imageBaseUrl,
  });
});

module.exports = router;
