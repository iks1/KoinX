import express, { Request, Response } from 'express';
import { fetchPrice } from '../services/priceService';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    console.log("HI");
    const price = await fetchPrice();
    res.json(price);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to fetch price' });
  }
});

export default router;
