import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('inventoryItem');

/**
 * @swagger
 * /api/inventory-items:
 *   get:
 *     summary: Get all inventory items
 *     tags: [Inventory Items]
 *     responses:
 *       200:
 *         description: List of inventory items
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/inventory-items/{id}:
 *   get:
 *     summary: Get an inventory item by ID
 *     tags: [Inventory Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Inventory item found
 *       404:
 *         description: Inventory item not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/inventory-items:
 *   post:
 *     summary: Create a new inventory item
 *     tags: [Inventory Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *               - unit
 *               - storageLocationId
 *               - productId
 *             properties:
 *               quantity:
 *                 type: number
 *               unit:
 *                 type: string
 *               expiryDate:
 *                 type: string
 *                 format: date-time
 *               storageLocationId:
 *                 type: string
 *               productId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Inventory item created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/inventory-items/{id}:
 *   put:
 *     summary: Update an inventory item
 *     tags: [Inventory Items]
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
 *               quantity:
 *                 type: number
 *               unit:
 *                 type: string
 *               expiryDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Inventory item updated
 *       404:
 *         description: Inventory item not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/inventory-items/{id}:
 *   delete:
 *     summary: Delete an inventory item
 *     tags: [Inventory Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Inventory item deleted
 *       404:
 *         description: Inventory item not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 