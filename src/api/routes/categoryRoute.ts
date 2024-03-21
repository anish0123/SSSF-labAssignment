import express from 'express';
import {
  categoryGet,
  categoryListGet,
  categoryPost,
  categoryPut,
} from '../controllers/categoryController';
import {body, param} from 'express-validator';
import {validationErrors} from '../../middlewares';

const router = express.Router();

router
  .route('/')
  .get(categoryListGet)
  .post(
    body('category_name').notEmpty().isString().isAlpha().escape(),
    validationErrors,
    categoryPost
  );

router
  .route('/:id')
  .get(param('id').isInt().notEmpty(), validationErrors, categoryGet)
  .put(
    param('id').isInt().notEmpty(),
    body('category_name').notEmpty().isString().isAlpha().escape(),
    validationErrors,
    categoryPut
  );

export default router;
