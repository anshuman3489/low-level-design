import { ParkingFloor } from "./ParkingFloor";
import { ParkingLot } from "./ParkingLot";
import { ParkingSpot } from "./ParkingSpot";
import { CardPaymentStrategy } from "./payment/CardPaymentStrategy";
import { Bike } from "./vehicle/Bike";
import { Car } from "./vehicle/Car";
import { Vehicle } from "./vehicle/Vehicle";
import { VehicleType } from "./vehicle/VehicleType";

class ParkingLotDemo {
    run() {
        const parkingLot = ParkingLot.getInstance();

        const floor1Spots = [
            new ParkingSpot(1, VehicleType.BIKE),
            new ParkingSpot(2, VehicleType.BIKE),
            new ParkingSpot(3, VehicleType.CAR),
        ];

        const floor2Spots = [
            new ParkingSpot(1, VehicleType.CAR),
            new ParkingSpot(2, VehicleType.CAR),
            new ParkingSpot(3, VehicleType.CAR),
        ];

        const floor1 = new ParkingFloor(1, floor1Spots);
        const floor2 = new ParkingFloor(2, floor2Spots);

        parkingLot.addFloor(floor1);
        parkingLot.addFloor(floor2);

        const bike1 = new Bike('BK01');
        const bike2 = new Bike('BK02');
        const bike3 = new Bike('BK03');
        const car1 = new Car('CR01');
        const car2 = new Car('CR02');

        const vehicles: Vehicle[] = [bike1, bike2, bike3, car1, car2];
        const tickets = [];

        for (const vehicle of vehicles) {
            try {
                const ticket = parkingLot.parkVehicle(vehicle);
                tickets.push(ticket);
            } catch (error) {
                console.log(`Unable to park ${vehicle.type} with license plate ${vehicle.licensePlate}.`)
            }
        }

        for (const ticket of tickets) {
            parkingLot.unparkVehicle(ticket, new CardPaymentStrategy());
        }
    }
}

new ParkingLotDemo().run();