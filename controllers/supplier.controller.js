import Supplier from '../models/supplier.model.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utills/error.js'; 


//update supplier..............
export const updateSupplier = async (req, res, next) => {
  if (req.supplier.id !== req.params.id)
    return next(errorHandler(401, 'You are not authenticated to update account!'));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          suppliername: req.body.suppliername,
          email: req.body.email,
          password: req.body.password,
          profilePic: req.body.profilePic,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedSupplier._doc;

    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
