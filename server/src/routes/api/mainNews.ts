import express from 'express';
import axios from 'axios';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

// GET /api/news - Fetch news from NewsAPI
router.get('/', async (_req: Request, res: Response) => {
  try {
    console.log("Fetching news from NewsAPI");

    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country: 'us',
        apiKey: process.env.NEWS_API_KEY,
      }
    });

    res.status(200).json(response.data.articles);
  } catch (error: any) {
    console.error('Error fetching news from NewsAPI:', error.message);
    res.status(500).json({ message: 'Failed to fetch news' });
  }
});

export { router as mainNewsRouter };
