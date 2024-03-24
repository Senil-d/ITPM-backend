import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
  suppliername: {
    type:String,
    required:true,
    unique: true,
  },

  email: {
    type:String,
    required:true,
    unique: true,
  },

  password: {
    type:String,
    required:true,
  },

  profilePic: {
    type: String,
    default: 'https://static.vecteezy.com/system/resources/previews/000/495/460/non_2x/vector-profile-line-black-icon.jpg'
  }

}, {timestamps:true});

const Supplier = mongoose.model('Supplier', supplierSchema);
export default Supplier;