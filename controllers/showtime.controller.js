import prisma from '../config/database.js';

export const createShowtime = async (req, res, next) => {
  try {
    const { movieId, screenId, startTime, price } = req.body;

    const newShowtime = await prisma.showtime.create({
      data: {
        movieId,
        screenId,
        startTime,
        price,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Showtime created successfully',
      data: {
        showtime: newShowtime,
      },
    });
  } catch (error) {
    next(error);
  }
};
export const getShowtimes = async (req, res, next) => {
  try {
    const showtimes = await prisma.showtime.findMany({
      include: { movie: true },
    });

    res.status(200).json({
      success: true,
      message: 'Get Showtimes successfully',
      data: { showtimes },
    });
  } catch (error) {
    next(e);
  }
};

export const getShowtime = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingShowtime = await prisma.showtime.findFirst({
      where: {
        id,
      },
      include: { movie: true },
    });

    if (!existingShowtime) {
      return res.status(403).json({
        success: false,
        message: 'Showtime Not Found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Get Showtime successfully',
      data: { showtime: existingShowtime },
    });
  } catch (error) {
    next(error);
  }
};
export const deleteShowtime = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingShowtime = await prisma.showtime.findFirst({
      where: {
        id,
      },
    });

    if (!existingShowtime) {
      return res.status(403).json({
        success: false,
        message: 'Showtime not found',
      });
    }

    await prisma.showtime.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Delete Showtime successfully',
    });
  } catch (error) {
    next(error);
  }
};
