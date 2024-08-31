import express, { Request, Response } from 'express';
import { fetchTransactions } from '../services/etherscanService';
import { saveTransactions } from '../database/services/services';
import { fetchPrice } from '../services/priceService';

const router = express.Router();

router.get('/:address', async (req: Request, res: Response) => {
  const address = req.params.address;
  try {
    const transactions = await fetchTransactions(address);
    const expense = calculateExpense(transactions);
    const price = await fetchPrice();
    res.json({expense,price});
  } catch (error) {
    res.status(500).json({ error: 'Failed to get expense' });
  }
});

export default router;

const calculateExpense = (transactions: any) =>{
    let totalGasUsed = 0;
    let totalGasPrice = 0;

    for(let i=0; i<transactions.length; i++){
        totalGasUsed += Number(transactions[i].gasUsed);
        totalGasPrice += Number(transactions[i].gasPrice);
    }

    return (totalGasPrice*totalGasUsed)/1e18;
}
