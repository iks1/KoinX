# KoinX
Assignment of KoinX for backend intern.
I have used Node.js, express, Mongoose(mongodb), TypeScript in this assignment. 

## APIs 
- `/api/transactions/:address` : takes address as a `query param` and returns transactions.
- `/api/price`: returns price of etherium.
- `/api/getExpense/:address` : takes address as `query params` and returns expense and price of etherium at that moment as specified in the assignment.

## Other Implemented Features 
- `getPriceOnInterval.ts` scripts runs continuously and checks (in every 10 mins) the price of Etherium and saves the information in the database.


