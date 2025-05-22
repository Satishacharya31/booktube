import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file in the 'server' directory
dotenv.config();

const app: Express = express();
const port = process.env.SERVER_PORT || 3001; // Changed to SERVER_PORT to avoid conflict with Next.js

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/api/health', (req: Request, res: Response) => { // Changed to /api/health
  res.status(200).json({ status: 'OK', message: 'BookTube Express Server is healthy' });
});

// Placeholder for API routes (e.g., /api/v1/...)
// import v1AuthRoutes from './api/v1/routes/auth.routes';
// app.use('/api/v1/auth', v1AuthRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
