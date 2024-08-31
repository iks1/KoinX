import { TransactionModel } from "../models/transaction";
import { PriceModel } from "../models/price";

export const saveTransactions = async (address: string, transactions: any) => {
    try{
        await TransactionModel.updateOne(
            { address },
            { $set: { transactions } },
            { upsert: true }
        );
    }
    catch(error){
        console.log('Error in saving trasaction', error);
    }
};

export const savePrice = async ( price : Number) => {
    try{
        const newPrice = new PriceModel({price});
        await newPrice.save();
    }
    catch(error){
        console.log('error saving price record', error);
    }
}