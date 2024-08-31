import axios from 'axios';
import * as dotenv from 'dotenv';
import path = require('path');
dotenv.config({path: path.join(__dirname,'../..','/.env')});

const COINGECKO_API_URL = process.env.COINGECKO_API_URL || "";

export async function fetchPrice() {
  const response = await axios.get(COINGECKO_API_URL);
  return response.data;
}
