import { Router } from 'express';
import {
  createShowtime,
  deleteShowtime,
  getShowtime,
  getShowtimes,
} from '../controllers/showtime.controller.js';

const showtimeRouter = Router();

showtimeRouter.post('/', createShowtime);
showtimeRouter.get('/', getShowtimes);
showtimeRouter.get('/:id', getShowtime);
showtimeRouter.delete('/:id', deleteShowtime);

export default showtimeRouter;
