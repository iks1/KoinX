import express from 'express'
import * as dotenv from 'dotenv'
import { Router } from 'express';
import transactionRoutes from './controllers/transactionController';
import priceRoutes from './controllers/priceController'
import path = require('path');

dotenv.config({path: path.join(__dirname,'..','/.env')});
const app = express();
const port = 3000;
app.use(express.json());

app.use('/api/transactions', transactionRoutes);
app.use('/api/price', priceRoutes);


app.listen(port,()=>{
    console.log(`running on ${port}`);
})