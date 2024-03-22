import Supplier from '../models/supplier.model.js';
import bcryptjs from 'bcryptjs';
import  jwt  from 'jsonwebtoken';

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


//sign in
export const signin = async (req, res, next) => {

  const { 
    email, 
    password
  } = req.body;

  try {
    const validSupplier = await Supplier.findOne({email});
    if(!validSupplier) {
      return next(errorHandler(404, 'Supplier not found'));
    }
    const validPassword = bcryptjs.compareSync(password, validSupplier.password);
    if(!validPassword)
      return next(errorHandler(401, 'Wrong credentials.'));

    const token = jwt.sign({ id: validSupplier._id}, process.env.JWT_SECRET);
    const { password: pass, ...rest} = validSupplier._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest)
    
  } catch (error) {
    next(error);
  }
};





