import { ParkingSpot } from "./ParkingSpot";
import { VehicleType } from "./vehicle/VehicleType";

export class ParkingFloor {
    constructor(public number: number, public spots: ParkingSpot[]) {}

    getParkingSpot(vehicleType: VehicleType) {
        const spot = this.spots.find(spot => spot.vehicleType === vehicleType && spot.isEmpty());
        return spot;
    }
}