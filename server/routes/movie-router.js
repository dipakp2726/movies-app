const express = require('express');
const movieCtrl = require('../controllers/movie-ctrl');

movieCtrl = require('../controllers/movie-ctrl')

const router = express.Router();

router.post('/movie', movieCtrl.createMovie)
router.put('/movie/:id', movieCtrl.updateMovie)
router.delete('/movie/:id', movieCtrl.deleteMovie)
router.get('/movie/:id', movieCtrl.getMovieById)
router.get('/movies', movieCtrl.getMovies)


module.exports = router