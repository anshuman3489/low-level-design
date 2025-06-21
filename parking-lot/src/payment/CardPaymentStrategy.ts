import { PaymentStrategy } from "./PaymentStrategy";

export class CardPaymentStrategy implements PaymentStrategy {
    makePayment(amount: number): void {
        console.log(`Paid ${amount} with card.`)
    }
}