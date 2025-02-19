import { Router } from 'express';
import {
  createMovie,
  deleteMovie,
  getMovie,
  getMovies,
  updateMovie,
} from '../controllers/movie.controller.js';

const moviesRouter = Router();

moviesRouter.post('/', createMovie);
moviesRouter.get('/', getMovies);
moviesRouter.get('/:id', getMovie);
moviesRouter.delete('/:id', deleteMovie);
moviesRouter.patch('/:id', updateMovie);

export default moviesRouter;
