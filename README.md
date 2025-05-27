# Kitch-Katch

A kitchen management API built with Express, TypeScript, and Prisma.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your values
   ```

3. Run database migrations:
   ```bash
   npx prisma migrate dev
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Documentation

Once the server is running, visit `/api-docs` for Swagger documentation.

## Technologies Used

- Express.js
- TypeScript
- Prisma
- PostgreSQL
- Swagger/OpenAPI
