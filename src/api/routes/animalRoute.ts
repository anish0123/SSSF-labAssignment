import express from 'express';
import {animalsListGet} from '../controllers/animalController';
import {categoryGet} from '../controllers/categoryController';

const router = express.Router();

router.route('/').get(animalsListGet);

router.route('/:id').get(categoryGet);

export default router;
