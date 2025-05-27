import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('household');

/**
 * @swagger
 * /api/households:
 *   get:
 *     summary: Get all households
 *     tags: [Households]
 *     responses:
 *       200:
 *         description: List of households
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/households/{id}:
 *   get:
 *     summary: Get a household by ID
 *     tags: [Households]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Household found
 *       404:
 *         description: Household not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/households:
 *   post:
 *     summary: Create a new household
 *     tags: [Households]
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
 *     responses:
 *       201:
 *         description: Household created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/households/{id}:
 *   put:
 *     summary: Update a household
 *     tags: [Households]
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
 *     responses:
 *       200:
 *         description: Household updated
 *       404:
 *         description: Household not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/households/{id}:
 *   delete:
 *     summary: Delete a household
 *     tags: [Households]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Household deleted
 *       404:
 *         description: Household not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 