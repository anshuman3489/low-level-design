import { PaymentStrategy } from "./PaymentStrategy";

export class CashPaymentStrategy implements PaymentStrategy {
    makePayment(amount: number): void {
        console.log(`Paid ${amount} with cash.`)
    }
}