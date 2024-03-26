import express from 'express';
import {createTour} from '../controllers/tour.controller.js';


const router = express.Router();

router.post('/create', createTour);

export default router;