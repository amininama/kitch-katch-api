import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('storageLocation');

/**
 * @swagger
 * /api/storage-locations:
 *   get:
 *     summary: Get all storage locations
 *     tags: [Storage Locations]
 *     responses:
 *       200:
 *         description: List of storage locations
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/storage-locations/{id}:
 *   get:
 *     summary: Get a storage location by ID
 *     tags: [Storage Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Storage location found
 *       404:
 *         description: Storage location not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/storage-locations:
 *   post:
 *     summary: Create a new storage location
 *     tags: [Storage Locations]
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
 *               description:
 *                 type: string
 *               householdId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Storage location created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/storage-locations/{id}:
 *   put:
 *     summary: Update a storage location
 *     tags: [Storage Locations]
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
 *         description: Storage location updated
 *       404:
 *         description: Storage location not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/storage-locations/{id}:
 *   delete:
 *     summary: Delete a storage location
 *     tags: [Storage Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Storage location deleted
 *       404:
 *         description: Storage location not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 