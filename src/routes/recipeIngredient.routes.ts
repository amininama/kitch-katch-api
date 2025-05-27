import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('recipeIngredient');

/**
 * @swagger
 * /api/recipe-ingredients:
 *   get:
 *     summary: Get all recipe ingredients
 *     tags: [Recipe Ingredients]
 *     responses:
 *       200:
 *         description: List of recipe ingredients
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/recipe-ingredients/{id}:
 *   get:
 *     summary: Get a recipe ingredient by ID
 *     tags: [Recipe Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Recipe ingredient found
 *       404:
 *         description: Recipe ingredient not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/recipe-ingredients:
 *   post:
 *     summary: Create a new recipe ingredient
 *     tags: [Recipe Ingredients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - recipeId
 *               - productId
 *               - quantity
 *               - unit
 *             properties:
 *               recipeId:
 *                 type: string
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *               unit:
 *                 type: string
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Recipe ingredient created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/recipe-ingredients/{id}:
 *   put:
 *     summary: Update a recipe ingredient
 *     tags: [Recipe Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               recipeId:
 *                 type: string
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *               unit:
 *                 type: string
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Recipe ingredient updated
 *       404:
 *         description: Recipe ingredient not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/recipe-ingredients/{id}:
 *   delete:
 *     summary: Delete a recipe ingredient
 *     tags: [Recipe Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Recipe ingredient deleted
 *       404:
 *         description: Recipe ingredient not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 