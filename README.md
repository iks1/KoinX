# KoinX
Assignment of KoinX for backend intern.
I have used Node.js, express, Mongoose(mongodb), TypeScript in this assignment. 

## APIs 
- `GET /api/transactions/:address` : takes address as a `query param` and returns transactions.
- `GET /api/price`: returns price of etherium.
- `GET /api/getExpense/:address` : takes address as `query params` and returns expense and price of etherium at that moment as specified in the assignment.

## Other Implemented Features 
- `getPriceOnInterval.ts` scripts runs continuously and checks (in every 10 mins) the price of Etherium and saves the information in the database.

## How to run
create a `.env` file in the root directory of this project and fill the following contents. MongoDb database can be hosted using Docker locally or can be created in MongoDb Atlas
```
 ETHERSCAN_API_KEY=
 COINGECKO_API_URL=
 MONGODB_URI=
 ```
 then run the following commands
 ```
 npm run build
 npm run start
 ```


