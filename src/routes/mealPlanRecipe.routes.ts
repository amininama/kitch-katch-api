import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('mealPlanRecipe');

/**
 * @swagger
 * /api/meal-plan-recipes:
 *   get:
 *     summary: Get all meal plan recipes
 *     tags: [Meal Plan Recipes]
 *     responses:
 *       200:
 *         description: List of meal plan recipes
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/meal-plan-recipes/{id}:
 *   get:
 *     summary: Get a meal plan recipe by ID
 *     tags: [Meal Plan Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Meal plan recipe found
 *       404:
 *         description: Meal plan recipe not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/meal-plan-recipes:
 *   post:
 *     summary: Create a new meal plan recipe
 *     tags: [Meal Plan Recipes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - mealPlanId
 *               - recipeId
 *               - dayOfWeek
 *               - mealType
 *             properties:
 *               mealPlanId:
 *                 type: string
 *               recipeId:
 *                 type: string
 *               dayOfWeek:
 *                 type: string
 *                 enum: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]
 *               mealType:
 *                 type: string
 *                 enum: [BREAKFAST, LUNCH, DINNER, SNACK]
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Meal plan recipe created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/meal-plan-recipes/{id}:
 *   put:
 *     summary: Update a meal plan recipe
 *     tags: [Meal Plan Recipes]
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
 *               mealPlanId:
 *                 type: string
 *               recipeId:
 *                 type: string
 *               dayOfWeek:
 *                 type: string
 *                 enum: [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY]
 *               mealType:
 *                 type: string
 *                 enum: [BREAKFAST, LUNCH, DINNER, SNACK]
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Meal plan recipe updated
 *       404:
 *         description: Meal plan recipe not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/meal-plan-recipes/{id}:
 *   delete:
 *     summary: Delete a meal plan recipe
 *     tags: [Meal Plan Recipes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Meal plan recipe deleted
 *       404:
 *         description: Meal plan recipe not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 