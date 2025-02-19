import { Router } from 'express';
import {
  createMovie,
  deleteMovie,
  getMovie,
  getMovies,
  updateMovie,
} from '../controllers/movie.controller.js';

const movieRouter = Router();

movieRouter.post('/', createMovie);
movieRouter.get('/', getMovies);
movieRouter.get('/:id', getMovie);
movieRouter.delete('/:id', deleteMovie);
movieRouter.patch('/:id', updateMovie);

export default movieRouter;
