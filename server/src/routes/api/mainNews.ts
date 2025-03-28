import express from 'express';
import type { Request, Response } from 'express';
// import { User } from '../../models/index.js';

const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req: Request, res: Response) => {
  try {
    console.log("MAIN NEWS API PLACEHOLDER")
    res.status(200).json("MAIN NEWS API PLACEHOLDER")
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ message: error.message });
  }
});

export { router as mainNewsRouter };
