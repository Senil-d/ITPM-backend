import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import supplierAuthRoute from './routes/supplierAuth.route.js';
import supplierRoute from './routes/supplier.route.js';
import cookieParser from "cookie-parser";


//MongDB connection...
dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.log(err);
});


const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//api routes...
app.use('/api/sauth', supplierAuthRoute);
app.use('/api/supplier', supplierRoute);

//error handler middleware...
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});