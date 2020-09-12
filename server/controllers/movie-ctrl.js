const Movie = require('../models/movie-model')


// creating new movie
CreateMovie = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a movie',
        })
    }
    const movie = new Movie(body)
    if (!movie) {
        return res.status(400).json({
            success: false,
            error: err,
        })
    }
    movie
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: movie.id,
                message: 'Movie created successfully',
            })
        })
        .catch(err => {
            res.status(400).json({
                error,
                message: 'movie could not be created '
            })
        })
}


//updating movie
updateMovie = async (req, res) => {

    const body = req.body
    //empty body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'provide body to update'
        })
    }

    Movie.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({
                err,
                message: 'Movie not found',
            })
        }

        movie.name = body.name
        movie.rating = body.rating
        movie.time = body.time
        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id=movie._id,
                    message: 'movie update',
                })
            })
            .catch(err => {
                return res.status(404).json({
                    err,
                    message: 'movie not updated',
                })
            })
    })
}

//delete movie
deleteMovie = async (req, res) => {

    await Movie.findOneAndDelete({ _id=req.params.id }, (err, movie) => {

        if (err) return res.status(400).json({ success: false, error: err })

        if (!movie) return res.status(404).json({ success: false, message: 'Movie not found' })

        return res.status(200).json({ success: true, data: movie })
    })
        .catch(err => console.log(err))
}


// get movie information by _id
getMovieById = async (req, res) => {

    await Movie.findOne({ id: req.params.id }, (err, movie) => {

        if (err) return res.status(400).json({ success: false, error: err })

        if (!movie) return res.status(404).json({ success: false, message: 'Movie not found' })

        return res.status(200).json({ success: true, data: movie })
    }).catch((err) => console.log(err))
}


// get all movies
getMovies = async (req, res) => {
    await Movie.find({}, (err, movies) => {
        if (err) return res.status(400).json({ success: false, error: err })

        if (!movies.length) return res.status(404).json({ success: false, error: 'Movie not found' })

        return res.status(200).json({ success: true, data: movies })
    }).catch((err) => console.log(err))
}

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovieById,
    getMovies
}