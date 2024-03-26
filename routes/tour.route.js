import express from 'express';
import {createTour, deleteTour, updateTour} from '../controllers/tour.controller.js';


const router = express.Router();

router.post('/create', createTour);
router.delete('/delete/:id', deleteTour);
router.post('/update/:id', updateTour);

export default router;