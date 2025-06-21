import { Ticket } from "../Ticket";

export interface FeeStrategy {
    calculateFee(ticket: Ticket): number;
}