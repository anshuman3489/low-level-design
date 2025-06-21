import { VehicleType } from "./VehicleType";

export abstract class Vehicle {
    constructor(public licensePlate: string, public type: VehicleType) {}
}