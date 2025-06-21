import { Vehicle } from "./Vehicle";
import { VehicleType } from "./VehicleType";

export class Car extends Vehicle {
    constructor(public licensePlate: string) {
        super(licensePlate, VehicleType.CAR);
    }
}