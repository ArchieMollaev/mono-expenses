// interface User {
//   id: string;
//   name: string;
//   webHookUrl: string;
//   accounts: Account[];
// }

// interface Account {
//   id: string;
//   balance: number;
//   creditLimit: number;
//   type: "black" | "white" | "platinum" | "iron" | "fop" | "yellow";
//   currencyCode: number;
//   cashbackType: "None" | "UAH" | "Miles";
// }

// interface StatementItem {
//   id: string;
//   time: number;
//   description: string;
//   /*  (Merchant Category Code) according to ISO 18245 */
//   mcc: number;
//   /* is blocked or not */
//   hold: boolean;
//   /* in account currency */
//   amount: number;
//   /* in transaction currency */
//   operationAmount: number;
//   currencyCode: number;
//   commissionRate: number;
//   cashbackAmount: number;
//   /* account balance */
//   balance: number;
//   comment: string;
//   receiptId: string;
//   counterEdrpou: string;
//   counterIban: string;
// }

// interface CurrencyInfo {
//   /* according to  ISO 4217 */
//   currencyCodeA: number;
//   /* according to  ISO 4217 */
//   currencyCodeB: number;
//   date: number;
//   rateSell: number;
//   rateBuy: number;
//   rateCross: number;
// }

// interface ResponseError {
//   errorDescription: string;
// }

// interface StatementItemUpdate {
//   type: "StatementItem";
//   data: {
//     account: Account;
//     statementItem: StatementItem;
//   };
// }

// ====================== frontend

// type Category =
//   | "transfers"
//   | "cafes_and_restaurants"
//   | "car"
//   | "groceries_and_supermarkets"
//   | "cloth_and_shoes"
//   | "beauty_and_medicine"
//   | "entertainment_music_games"
//   | "communal_and_internet"
//   | "mobile_connection"
//   | "taxies"
//   | "sport"
//   | "trips"
//   | "others";

interface TransactionsExcerpt {
  /* from 0 to 11 */
  month: number;
  year: number;
  transactions: Transaction[];
}

interface Transaction {
  id: string;
  time: number;
  description: string;
  amount: number;
  comment: string;
  /*  (Merchant Category Code) according to ISO 18245 */
  mcc: number;
}

export type AccountType =
  | "black"
  | "white"
  | "platinum"
  | "iron"
  | "fop"
  | "yellow";

interface Account {
  id: string;
  balance: number;
  type: AccountType;
  currencyCode: number;
}
