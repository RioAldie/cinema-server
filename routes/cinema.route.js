import { Router } from 'express';
import {
  createCinema,
  deleteCinema,
  getCinema,
  getCinemas,
  updateCinema,
} from '../controllers/cinema.controller.js';

const cinemasRoute = Router();

cinemasRoute.post('/', createCinema);
cinemasRoute.get('/', getCinemas);
cinemasRoute.get('/:id', getCinema);
cinemasRoute.delete('/:id', deleteCinema);
cinemasRoute.patch('/:id', updateCinema);

export default cinemasRoute;
