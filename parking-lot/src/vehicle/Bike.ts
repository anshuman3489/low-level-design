import { Vehicle } from "./Vehicle";
import { VehicleType } from "./VehicleType";

export class Bike extends Vehicle {
    constructor(public licensePlate: string) {
        super(licensePlate, VehicleType.BIKE);
    }
}