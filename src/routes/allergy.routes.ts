import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('allergy');

/**
 * @swagger
 * /api/allergies:
 *   get:
 *     summary: Get all allergies
 *     tags: [Allergies]
 *     responses:
 *       200:
 *         description: List of allergies
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/allergies/{id}:
 *   get:
 *     summary: Get an allergy by ID
 *     tags: [Allergies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Allergy found
 *       404:
 *         description: Allergy not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/allergies:
 *   post:
 *     summary: Create a new allergy
 *     tags: [Allergies]
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
 *         description: Allergy created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/allergies/{id}:
 *   put:
 *     summary: Update an allergy
 *     tags: [Allergies]
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
 *         description: Allergy updated
 *       404:
 *         description: Allergy not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/allergies/{id}:
 *   delete:
 *     summary: Delete an allergy
 *     tags: [Allergies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Allergy deleted
 *       404:
 *         description: Allergy not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 