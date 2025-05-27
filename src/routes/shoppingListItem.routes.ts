import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('shoppingListItem');

/**
 * @swagger
 * /api/shopping-list-items:
 *   get:
 *     summary: Get all shopping list items
 *     tags: [Shopping List Items]
 *     responses:
 *       200:
 *         description: List of shopping list items
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/shopping-list-items/{id}:
 *   get:
 *     summary: Get a shopping list item by ID
 *     tags: [Shopping List Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shopping list item found
 *       404:
 *         description: Shopping list item not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/shopping-list-items:
 *   post:
 *     summary: Create a new shopping list item
 *     tags: [Shopping List Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - shoppingListId
 *               - productId
 *               - quantity
 *               - unit
 *             properties:
 *               shoppingListId:
 *                 type: string
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *               unit:
 *                 type: string
 *               isChecked:
 *                 type: boolean
 *               notes:
 *                 type: string
 *     responses:
 *       201:
 *         description: Shopping list item created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/shopping-list-items/{id}:
 *   put:
 *     summary: Update a shopping list item
 *     tags: [Shopping List Items]
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
 *               shoppingListId:
 *                 type: string
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *               unit:
 *                 type: string
 *               isChecked:
 *                 type: boolean
 *               notes:
 *                 type: string
 *     responses:
 *       200:
 *         description: Shopping list item updated
 *       404:
 *         description: Shopping list item not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/shopping-list-items/{id}:
 *   delete:
 *     summary: Delete a shopping list item
 *     tags: [Shopping List Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Shopping list item deleted
 *       404:
 *         description: Shopping list item not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 