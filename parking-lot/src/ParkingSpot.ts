import { Vehicle } from "./vehicle/Vehicle";
import { VehicleType } from "./vehicle/VehicleType";

export class ParkingSpot {
    vehicle: Vehicle;
    constructor(public number: number, public vehicleType: VehicleType) {}

    park(vehicle: Vehicle) {
        if (this.vehicle) {
            throw new Error('Parking Spot is not available!');
        }

        if (vehicle.type !== this.vehicleType) {
            throw new Error('Incompatible vehicle type!');
        }

        this.vehicle = vehicle;
    }

    unpark() {
        if (!this.vehicle) {
            throw new Error('No vehicle to unpark!');
        }

        this.vehicle = null;
    }

    isEmpty() {
        return !this.vehicle;
    }
}