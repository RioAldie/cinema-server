import prisma from '../config/database.js';

export const createCinema = async (req, res, next) => {
  try {
    const { name, location } = req.body;

    const newCinema = await prisma.cinema.create({
      data: {
        name,
        location,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Cinema created successfully',
      data: {
        cinema: newCinema,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getCinemas = async (req, res, next) => {
  try {
    const cinemas = await prisma.cinema.findMany();

    res.status(200).json({
      success: true,
      message: 'Get Cinemas successfully',
      data: { cinemas },
    });
  } catch (error) {
    next(error);
  }
};

export const getCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingCinema = await prisma.cinema.findFirst({
      where: {
        id,
      },
    });

    if (!existingCinema) {
      return res.status(403).json({
        success: false,
        message: 'Cinema Not Found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Get Cinema successfully',
      data: { existingCinema },
    });
  } catch (error) {
    next(error);
  }
};
export const deleteCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingCinema = await prisma.cinema.findFirst({
      where: {
        id,
      },
    });

    if (!existingCinema) {
      return res.status(403).json({
        success: false,
        message: 'Cinema not found',
      });
    }

    await prisma.cinema.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Delete cinema successfully',
    });
  } catch (error) {
    next(error);
  }
};
export const updateCinema = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, location } = req.body;
    const existingCinema = await prisma.cinema.findFirst({
      where: {
        id,
      },
    });

    if (!existingCinema) {
      return res.status(403).json({
        success: false,
        message: 'Cinema not found',
      });
    }

    const editCinema = await prisma.cinema.update({
      where: {
        id: existingCinema.id,
      },
      data: {
        name: name || existingCinema.name,
        location: location || existingCinema.location,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Update cinema successfully',
      data: { editCinema },
    });
  } catch (error) {
    next(error);
  }
};
