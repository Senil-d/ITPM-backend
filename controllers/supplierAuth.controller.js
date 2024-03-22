import Supplier from '../models/supplier.model.js';
import bcryptjs from 'bcryptjs';

//sign up
export const signup = async (req, res, next) => {

  const {
    suppliername, 
    email, 
    password
  } = req.body;

  //encrypt the password...
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newSupplier = new Supplier({ suppliername,email,password: hashedPassword});
  try{

    await newSupplier.save()
    res.status(201).json("New supplier created successfully");

  }catch(error){
    next(error);
  }
  
};



