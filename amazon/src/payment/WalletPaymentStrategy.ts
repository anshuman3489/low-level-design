import { PaymentStrategy } from "./PaymentStrategy";

export class WalletPaymentStrategy implements PaymentStrategy {
    makePayment(amount: number) {
        console.log(`${amount} rupees paid via wallet!`);
        return true;
    }
}