import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('shoppingList');

/**
 * @swagger
 * /api/shopping-lists:
 *   get:
 *     summary: Get all shopping lists
 *     tags: [Shopping Lists]
 *     responses:
 *       200:
 *         description: List of shopping lists
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/shopping-lists/{id}:
 *   get:
 *     summary: Get a shopping list by ID
 *     tags: [Shopping Lists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shopping list found
 *       404:
 *         description: Shopping list not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/shopping-lists:
 *   post:
 *     summary: Create a new shopping list
 *     tags: [Shopping Lists]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - householdId
 *             properties:
 *               name:
 *                 type: string
 *               householdId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Shopping list created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/shopping-lists/{id}:
 *   put:
 *     summary: Update a shopping list
 *     tags: [Shopping Lists]
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
 *         description: Shopping list updated
 *       404:
 *         description: Shopping list not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/shopping-lists/{id}:
 *   delete:
 *     summary: Delete a shopping list
 *     tags: [Shopping Lists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Shopping list deleted
 *       404:
 *         description: Shopping list not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 