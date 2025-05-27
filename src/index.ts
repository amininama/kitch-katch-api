import express from 'express';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Kitch-Katch API',
      version: '1.0.0',
      description: 'API documentation for Kitch-Katch application',
    },
    servers: [
        {
          url: process.env.NODE_ENV === 'production' 
            ? process.env.API_URL || 'https://kitch-katch.onrender.com' 
            : 'http://localhost:3000',
          description: process.env.NODE_ENV === 'production' ? 'Production server' : 'Development server',
        },
      ],
  },
  apis: ['./src/routes/*.ts'], // Path to the API routes
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Import routes
import allergyRoutes from './routes/allergy.routes';
import categoryRoutes from './routes/category.routes';
import dietPreferenceRoutes from './routes/dietPreference.routes';
import householdRoutes from './routes/household.routes';
import inventoryItemRoutes from './routes/inventoryItem.routes';
import mealPlanRoutes from './routes/mealPlan.routes';
import mealPlanRecipeRoutes from './routes/mealPlanRecipe.routes';
import productRoutes from './routes/product.routes'; 
import recipeRoutes from './routes/recipe.routes';
import recipeIngredientRoutes from './routes/recipeIngredient.routes';
import shoppingListRoutes from './routes/shoppingList.routes';
import shoppingListItemRoutes from './routes/shoppingListItem.routes';
import storageLocationRoutes from './routes/storageLocation.routes';
import userRoutes from './routes/user.routes';
import userAllergyRoutes from './routes/userAllergy.routes';
import userDietPreferenceRoutes from './routes/userDietPreference.routes';


// Use routes
app.use('/api/allergies', allergyRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/diet-preferences', dietPreferenceRoutes);
app.use('/api/households', householdRoutes);
app.use('/api/inventory-items', inventoryItemRoutes);
app.use('/api/meal-plan-recipes', mealPlanRecipeRoutes);
app.use('/api/meal-plans', mealPlanRoutes);
app.use('/api/products', productRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/recipe-ingredients', recipeIngredientRoutes);
app.use('/api/shopping-lists', shoppingListRoutes);
app.use('/api/shopping-list-items', shoppingListItemRoutes);
app.use('/api/storage-locations', storageLocationRoutes);
app.use('/api/user-allergies', userAllergyRoutes);
app.use('/api/user-diet-preferences', userDietPreferenceRoutes);
app.use('/api/users', userRoutes);


// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Something went wrong!',
  });
});

// Start server
const PORT = process.env.PORT || 3000;
const baseUrl = process.env.NODE_ENV === 'production' 
  ? process.env.API_URL || 'https://kitch-katch.onrender.com'
  : `http://localhost:${PORT}`;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger documentation available at http://${baseUrl}:${PORT}/docs`);
}); 