import express from 'express';

import { getCategories, getCategorieByID, createCategorie, updateCategorie,
deleteCategorie } from '../controllers/categories.controllers.js';

const router = express.Router();
router.get('/', getCategories);
router.post('/', createCategorie);
router.get('/:id', getCategorieByID);
router.put('/:id', updateCategorie);
router.delete('/:id', deleteCategorie);
export default router;