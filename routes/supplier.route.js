import express from 'express';
import { updateSupplier } from '../controllers/supplier.controller.js';
import { verifyToken } from '../utills/verifySupplier.js';


const router = express.Router();

router.post("/update/:id", verifyToken, updateSupplier);

export default router;