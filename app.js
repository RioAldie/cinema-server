import express from 'express';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middlewares/error.middleware.js';
import moviesRouter from './routes/movie.route.js';
import cinemasRoute from './routes/cinema.route.js';
import screenRouter from './routes/screen.route.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/movies', moviesRouter);
app.use('/api/v1/cinemas', cinemasRoute);
app.use('/api/v1/screens', screenRouter);

app.use(errorMiddleware);

app.listen(9000, async () => {
  console.log('Server API running on http://localhost:9000');
});

export default app;
