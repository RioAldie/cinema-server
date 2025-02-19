import { Router } from 'express';
import {
  createScreen,
  deleteScreen,
  getScreen,
  getScreens,
} from '../controllers/screen.controller.js';

const screenRouter = Router();

screenRouter.post('/', createScreen);
screenRouter.get('/', getScreens);
screenRouter.get('/:id', getScreen);
screenRouter.delete('/:id', deleteScreen);

export default screenRouter;
