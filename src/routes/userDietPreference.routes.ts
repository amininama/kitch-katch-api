import express from 'express';
import { BaseController } from '../controllers/base.controller';

const router = express.Router();
const controller = new BaseController('userDietPreference');

/**
 * @swagger
 * /api/user-diet-preferences:
 *   get:
 *     summary: Get all user diet preferences
 *     tags: [User Diet Preferences]
 *     responses:
 *       200:
 *         description: List of user diet preferences
 */
router.get('/', (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /api/user-diet-preferences/{id}:
 *   get:
 *     summary: Get a user diet preference by ID
 *     tags: [User Diet Preferences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User diet preference found
 *       404:
 *         description: User diet preference not found
 */
router.get('/:id', (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /api/user-diet-preferences:
 *   post:
 *     summary: Create a new user diet preference
 *     tags: [User Diet Preferences]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - dietPreferenceId
 *             properties:
 *               userId:
 *                 type: string
 *               dietPreferenceId:
 *                 type: string
 *     responses:
 *       201:
 *         description: User diet preference created
 */
router.post('/', (req, res) => controller.create(req, res));

/**
 * @swagger
 * /api/user-diet-preferences/{id}:
 *   put:
 *     summary: Update a user diet preference
 *     tags: [User Diet Preferences]
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
 *               dietPreferenceId:
 *                 type: string
 *     responses:
 *       200:
 *         description: User diet preference updated
 *       404:
 *         description: User diet preference not found
 */
router.put('/:id', (req, res) => controller.update(req, res));

/**
 * @swagger
 * /api/user-diet-preferences/{id}:
 *   delete:
 *     summary: Delete a user diet preference
 *     tags: [User Diet Preferences]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: User diet preference deleted
 *       404:
 *         description: User diet preference not found
 */
router.delete('/:id', (req, res) => controller.delete(req, res));

export default router; 