import express from 'express';
import { deleteSupplier, updateSupplier } from '../controllers/supplier.controller.js';
import { verifyToken } from '../utills/verifySupplier.js';


const router = express.Router();

router.post("/update/:id", verifyToken, updateSupplier);
router.delete("/delete/:id", verifyToken, deleteSupplier);

export default router;