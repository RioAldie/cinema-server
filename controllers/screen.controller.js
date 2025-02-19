import prisma from '../config/database.js';

export const createScreen = async (req, res, next) => {
  try {
    const { name, capacity, cinemaId } = req.body;

    const newScreen = await prisma.screen.create({
      data: {
        name,
        capacity,
        cinemaId,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Screen created successfully',
      data: {
        screen: newScreen,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getScreens = async (req, res, next) => {
  try {
    const screens = await prisma.screen.findMany();

    res.status(200).json({
      success: true,
      message: 'Get screens successfully',
      data: { screens },
    });
  } catch (error) {
    next(error);
  }
};
export const getScreen = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingScreen = await prisma.screen.findFirst({
      where: {
        id,
      },
      include: {
        showtimes: {
          include: { movie: true },
        },
      },
    });

    if (!existingScreen) {
      return res.status(403).json({
        success: false,
        message: 'Screen Not Found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Get Screen successfully',
      data: { screen: existingScreen },
    });
  } catch (error) {
    next(error);
  }
};
export const deleteScreen = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existingScreen = await prisma.screen.findFirst({
      where: {
        id,
      },
    });

    if (!existingScreen) {
      return res.status(403).json({
        success: false,
        message: 'Screen not found',
      });
    }

    await prisma.screen.delete({
      where: {
        id,
      },
    });

    res.status(200).json({
      success: true,
      message: 'Delete Screen successfully',
    });
  } catch (error) {
    next(error);
  }
};
