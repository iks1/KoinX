import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    address: { type: String, required: true },
    transactions: [{ type: Object, required: true }]
});

export const TransactionModel = mongoose.model('Transaction', transactionSchema);
