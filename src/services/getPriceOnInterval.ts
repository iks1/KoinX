import { fetchPrice } from './priceService';
import { savePrice } from '../database/services/services'
async function updatePrice() {
  try {
    const price = await fetchPrice();
    await savePrice(price.ethereum.inr);
  //  console.log(price + ' at ' + Date.now());
  } catch (error) {
    console.error('Failed to update price:', error);
  }
}

setInterval(updatePrice, 10 * 60 * 1000);
