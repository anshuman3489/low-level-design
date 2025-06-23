import { PaymentStrategy } from "./PaymentStrategy";

export class CardPaymentStrategy implements PaymentStrategy {
    makePayment(amount: number) {
        if (amount < 0) {
            console.warn('Invalid amount!');
            return false;
        }
        
        console.log(`${amount} rupees paid via card!`);
        return true;
    }
}