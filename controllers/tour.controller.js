import Tour from '../models/tour.model.js';
import { errorHandler } from '../utills/error.js';


//create a tour...........
export const createTour = async (req, res, next) => {
  try {
    const tour = await Tour.create(req.body);
    return res.status(201).json(tour);
  } catch (error) {
    next(error);
  }
};

//delete a tour................
export const deleteTour = async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);

  if (!tour) {
    return next(errorHandler(404, 'Tour not found!'));
  }

  if (req.supplier.id !== tour.supplierRef) {
    return next(errorHandler(401, 'You can only delete your own tours!'));
  }

  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json('tour has been deleted!');
  } catch (error) {
    next(error);
  }
};

//update a tour.............
export const updateTour = async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);
  if (!tour) {
    return next(errorHandler(404, 'Tour not found!'));
  }
  if (req.supplier.id !== tour.supplierRef) {
    return next(errorHandler(401, 'You can only update your own tours!'));
  }

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedTour);
  } catch (error) {
    next(error);
  }
};

