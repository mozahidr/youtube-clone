import Movie from '../models/Movie.js';

// CREATE MOVIE
export const createMovie = async (req, res) => {
  if (req.user?.isAdmin) {
    const existingMovieName = await Movie.findOne({ title: req.body.title });
    if (existingMovieName) {
      res
        .status(422)
        .json({ message: 'Movie Title already exists Try Different one' });
      return;
    }
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You must be an administrator');
  }
};

// UPDATE MOVIE

export const updateMovie = async (req, res) => {
  if (req.user?.isAdmin) {
    try {
      const existingMovieName = await Movie.findOne({ title: req.body.title });
      if (existingMovieName) {
        res
          .status(422)
          .json({ message: 'Movie Title already exists Try Different one' });
        return;
      }
      const updatedMovie = await Movie.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      res.status(200).json(updatedMovie);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You must be an administrator');
  }
};

// DELETE MOVIE
export const deleteMovie = async (req, res) => {
    if (req.user?.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id);
            res.status(200).json("The movie has been deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json('You must be an administrator');
    }
}

// GET MOVIE BY ID
export const getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err);
    }
}

// GET RANDOM MOVIE
export const getRandomMovies = async (req, res) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === 'series') {
      movie = await Movie.aggregate([
        { $match: { isSeries: true }},
        { $sample: { size: 1 }},
      ]);
    } else {
      movie = await Movie.aggregate([
        { $match: { isSeries: false }},
        { $sample: { size: 1 }},
      ]);
    }
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).json(err);
  }
}

// GET ALL MOVIES
export const getAllMovies = async (req, res) => {
  if (req.user?.isAdmin) {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('You must be an administrator');
  }
}