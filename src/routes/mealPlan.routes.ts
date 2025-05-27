import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('mealPlan');

/**
 * @swagger
 * /api/meal-plans:
 *   get:
 *     summary: Get all meal plans
 *     tags: [Meal Plans]
 *     responses:
 *       200:
 *         description: List of meal plans
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/meal-plans/{id}:
 *   get:
 *     summary: Get a meal plan by ID
 *     tags: [Meal Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Meal plan found
 *       404:
 *         description: Meal plan not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/meal-plans:
 *   post:
 *     summary: Create a new meal plan
 *     tags: [Meal Plans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - startDate
 *               - endDate
 *               - householdId
 *             properties:
 *               name:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *               householdId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Meal plan created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/meal-plans/{id}:
 *   put:
 *     summary: Update a meal plan
 *     tags: [Meal Plans]
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
 *               name:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 format: date-time
 *               endDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Meal plan updated
 *       404:
 *         description: Meal plan not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/meal-plans/{id}:
 *   delete:
 *     summary: Delete a meal plan
 *     tags: [Meal Plans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Meal plan deleted
 *       404:
 *         description: Meal plan not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 