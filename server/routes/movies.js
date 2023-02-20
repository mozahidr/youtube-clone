import express from 'express';
import {
  createMovie,
  updateMovie,
  deleteMovie,
  getMovieById,
  getRandomMovies,
  getAllMovies,
} from '../controllers/movie.js';
import { verify } from '../verifyToken.js';

const router = express.Router();

router.post('/', verify, createMovie);
router.put('/:id', verify, updateMovie);
router.delete('/:id', verify, deleteMovie);
router.get('/find/:id', verify, getMovieById);
router.get('/random', verify, getRandomMovies);
router.get('/', verify, getAllMovies);

export default router;
