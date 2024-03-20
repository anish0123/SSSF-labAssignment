import {Request, NextFunction, Response} from 'express';
import {Animal} from '../../types/DBTypes';
import {getAllAnimals, getAnimalById} from '../models/animalModel';

const animalsListGet = async (
  req: Request,
  res: Response<Animal[]>,
  next: NextFunction
) => {
  try {
    const species = await getAllAnimals();
    res.json(species);
  } catch (error) {
    next(error);
  }
};

const animalGet = async (
  req: Request<{id: string}, {}, {}>,
  res: Response<Animal>,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const category = await getAnimalById(id);
    res.json(category);
  } catch (error) {
    next(error);
  }
};

export {animalsListGet, animalGet};
