import express, { Request, Response } from 'express';
import { fetchTransactions } from '../services/etherscanService';
import { saveTransactions } from '../database/services/services';

const router = express.Router();

router.get('/:address', async (req: Request, res: Response) => {
  const address = req.params.address;
  try {
    const transactions = await fetchTransactions(address);
    await saveTransactions(address, transactions)
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

export default router;
