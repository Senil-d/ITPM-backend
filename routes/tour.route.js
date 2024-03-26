import express from 'express';
import {createTour, deleteTour} from '../controllers/tour.controller.js';


const router = express.Router();

router.post('/create', createTour);
router.delete('/delete/:id', deleteTour);

export default router;