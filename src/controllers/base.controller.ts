import { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';

type PrismaModel = {
  findMany: () => Promise<any[]>;
  findUnique: (args: { where: { id: string } }) => Promise<any>;
  create: (args: { data: any }) => Promise<any>;
  update: (args: { where: { id: string }; data: any }) => Promise<any>;
  delete: (args: { where: { id: string } }) => Promise<any>;
};

export class BaseController {
  protected prisma: PrismaClient;
  protected model: PrismaModel;

  constructor(modelName: string) {
    this.prisma = new PrismaClient();
    this.model = (this.prisma as any)[modelName] as PrismaModel;
  }

  /**
   * @swagger
   * /api/{resource}:
   *   get:
   *     summary: Get all resources
   *     responses:
   *       200:
   *         description: List of resources
   */
  async getAll(req: Request, res: Response) {
    try {
      const items = await this.model.findMany();
      res.json(items);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Failed to fetch items' });
    }
  }

  /**
   * @swagger
   * /api/{resource}/{id}:
   *   get:
   *     summary: Get a resource by ID
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Resource found
   *       404:
   *         description: Resource not found
   */
  async getById(req: Request, res: Response) {
    try {
      const item = await this.model.findUnique({
        where: { id: req.params.id },
      });
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch item' });
    }
  }

  /**
   * @swagger
   * /api/{resource}:
   *   post:
   *     summary: Create a new resource
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *     responses:
   *       201:
   *         description: Resource created
   */
  async create(req: Request, res: Response) {
    try {
      const item = await this.model.create({
        data: req.body,
      });
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create item' });
    }
  }

  /**
   * @swagger
   * /api/{resource}/{id}:
   *   put:
   *     summary: Update a resource
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
   *     responses:
   *       200:
   *         description: Resource updated
   *       404:
   *         description: Resource not found
   */
  async update(req: Request, res: Response) {
    try {
      const item = await this.model.update({
        where: { id: req.params.id },
        data: req.body,
      });
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update item' });
    }
  }

  /**
   * @swagger
   * /api/{resource}/{id}:
   *   delete:
   *     summary: Delete a resource
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Resource deleted
   *       404:
   *         description: Resource not found
   */
  async delete(req: Request, res: Response) {
    try {
      await this.model.delete({
        where: { id: req.params.id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete item' });
    }
  }
} 