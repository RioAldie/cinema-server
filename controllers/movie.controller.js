import prisma from '../config/database.js';

export const createMovie = async (req, res, next) => {
  try {
    const { title, description, duration, releaseDate, posterUrl } =
      req.body;

    const newMovie = await prisma.movie.create({
      data: {
        title,
        description,
        duration,
        releaseDate,
        posterUrl,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Movie created successfully',
      data: {
        movie: newMovie,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getMovies = async (req, res, next) => {
  try {
    const movies = await prisma.movie.findMany();

    res.status(200).json({
      success: true,
      message: 'Get Movies successfully',
      data: { movies },
    });
  } catch (error) {
    next(e);
  }
};

export const getMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await prisma.movie.findFirst({
      where: {
        id,
      },
    });

    if (!movie) {
      return res.status(403).json({
        success: false,
        message: 'Movie not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Get Movie successfully',
      data: { movie },
    });
  } catch (error) {
    next(e);
  }
};

export const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await prisma.movie.findFirst({
      where: {
        id,
      },
    });

    if (!movie) {
      return res.status(403).json({
        success: false,
        message: 'Movie not found',
      });
    }

    await prisma.movie.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Delete movie successfully',
    });
  } catch (error) {
    next(error);
  }
};
export const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description, duration, releaseDate, posterUrl } =
      req.body;
    const existingMovie = await prisma.movie.findFirst({
      where: {
        id,
      },
    });

    if (!existingMovie) {
      return res.status(403).json({
        success: false,
        message: 'Movie not found',
      });
    }

    const editMovie = await prisma.movie.update({
      where: {
        id: existingMovie.id,
      },
      data: {
        title: title || existingMovie.title,
        description: description || existingMovie.description,
        duration: duration || existingMovie.duration,
        releaseDate: releaseDate || existingMovie.releaseDate,
        posterUrl: posterUrl || existingMovie.posterUrl,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Update movie successfully',
      data: { editMovie },
    });
  } catch (error) {
    next(error);
  }
};
