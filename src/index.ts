import './services/getPriceOnInterval';
import express from 'express'
import * as dotenv from 'dotenv'
import { Router } from 'express';
import transactionRoutes from './controllers/transactionController';
import getExpense from './controllers/getExpense'
import priceRoutes from './controllers/priceController'
import path = require('path');
import mongoose,{ConnectOptions} from 'mongoose';

dotenv.config({path: path.join(__dirname,'..','/.env')});
const app = express();
const port = 3000;
app.use(express.json());

app.use('/api/transactions', transactionRoutes);
app.use('/api/price', priceRoutes);
app.use('/api/getExpense', getExpense)


mongoose.connect(process.env.MONGODB_URI || "")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));


app.listen(port,()=>{
    console.log(`running on ${port}`);
})