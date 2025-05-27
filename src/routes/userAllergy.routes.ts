import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('userAllergy');

/**
 * @swagger
 * /api/user-allergies:
 *   get:
 *     summary: Get all user allergies
 *     tags: [User Allergies]
 *     responses:
 *       200:
 *         description: List of user allergies
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/user-allergies/{id}:
 *   get:
 *     summary: Get a user allergy by ID
 *     tags: [User Allergies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User allergy found
 *       404:
 *         description: User allergy not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/user-allergies:
 *   post:
 *     summary: Create a new user allergy
 *     tags: [User Allergies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - allergyId
 *             properties:
 *               userId:
 *                 type: string
 *               allergyId:
 *                 type: string
 *     responses:
 *       201:
 *         description: User allergy created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/user-allergies/{id}:
 *   put:
 *     summary: Update a user allergy
 *     tags: [User Allergies]
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
 *               userId:
 *                 type: string
 *               allergyId:
 *                 type: string
 *     responses:
 *       200:
 *         description: User allergy updated
 *       404:
 *         description: User allergy not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/user-allergies/{id}:
 *   delete:
 *     summary: Delete a user allergy
 *     tags: [User Allergies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User allergy deleted
 *       404:
 *         description: User allergy not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 