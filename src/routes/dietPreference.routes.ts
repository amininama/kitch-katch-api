import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('dietPreference');

/**
 * @swagger
 * /api/diet-preferences:
 *   get:
 *     summary: Get all diet preferences
 *     tags: [Diet Preferences]
 *     responses:
 *       200:
 *         description: List of diet preferences
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/diet-preferences/{id}:
 *   get:
 *     summary: Get a diet preference by ID
 *     tags: [Diet Preferences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Diet preference found
 *       404:
 *         description: Diet preference not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/diet-preferences:
 *   post:
 *     summary: Create a new diet preference
 *     tags: [Diet Preferences]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Diet preference created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/diet-preferences/{id}:
 *   put:
 *     summary: Update a diet preference
 *     tags: [Diet Preferences]
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
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Diet preference updated
 *       404:
 *         description: Diet preference not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/diet-preferences/{id}:
 *   delete:
 *     summary: Delete a diet preference
 *     tags: [Diet Preferences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Diet preference deleted
 *       404:
 *         description: Diet preference not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 