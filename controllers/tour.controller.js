import Tour from '../models/tour.model.js';


//create a tour...........
export const createTour = async (req, res, next) => {
  try {
    const tour = await Tour.create(req.body);
    return res.status(201).json(tour);
  } catch (error) {
    next(error);
  }
};

