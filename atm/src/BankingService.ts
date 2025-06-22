// import { Account } from "./Account";
// import { Card } from "./Card";

// export class BankingService {
//     private static instance: BankingService;
//     private accounts: Set<Account>;
//     private cards: Set<Card>;

//     private constructor() {}

//     static getInstance() {
//         if (!BankingService.instance) {
//             BankingService.instance = new BankingService();
//         }
//         return BankingService.instance;
//     }

//     createAccount(accountNumber: string, initialBalance: number) {
//         const account = new Account(accountNumber, initialBalance);
//         this.accounts.add(account);
//         return account;
//     }

//     createCard(cardNumber: string, pin: string, account: Account) {
//         if (!this.accounts.has(account)) {
//             throw new Error('Invalid Account!');
//         }

//         const card = new Card(cardNumber, pin, account);
//         this.cards.add(card);
//         return card;
//     }
// }