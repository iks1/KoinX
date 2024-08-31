import axios from 'axios';
import * as dotenv from 'dotenv';
import path = require('path');
dotenv.config({path: path.join(__dirname,'../..','/.env')});

const ETHERSCAN_API_URL = 'https://api.etherscan.io/api';
const API_KEY = process.env.ETHERSCAN_API_KEY;

export async function fetchTransactions(address: string) {
  const url = `${ETHERSCAN_API_URL}?module=account&action=txlist&address=${address}&apikey=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.result;
}
