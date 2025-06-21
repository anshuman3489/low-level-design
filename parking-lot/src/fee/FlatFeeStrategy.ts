import { Ticket } from "../Ticket";
import { VehicleType } from "../vehicle/VehicleType";
import { FeeStrategy } from "./FeeStrategy";

export class FlatFeeStrategy implements FeeStrategy {
    rates: Map<VehicleType, number>;
    
    constructor() {
        this.rates = new Map([
            [VehicleType.BIKE, 20],
            [VehicleType.CAR, 50],
        ]);
    }

    calculateFee(ticket: Ticket): number {
        const vehicleType = ticket.vehicle.type;
        const fee = this.rates.get(vehicleType);
        return fee;
    }
}