import { Ticket } from "../Ticket";
import { VehicleType } from "../vehicle/VehicleType";
import { FeeStrategy } from "./FeeStrategy";

export class HourlyFeeStrategy implements FeeStrategy {
    hourlyRates: Map<VehicleType, number>;
    
    constructor() {
        this.hourlyRates = new Map([
            [VehicleType.BIKE, 10],
            [VehicleType.CAR, 30],
        ]);
    }

    calculateFee(ticket: Ticket): number {
        const vehicleType = ticket.vehicle.type;
        const rate = this.hourlyRates.get(vehicleType);
        const durationInMs = ticket.getDuration();
        const durationInHours = Math.ceil(durationInMs / 1000 * 60 * 60);
        return rate * durationInHours;
    }
}