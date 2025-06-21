import { FeeStrategy } from "./fee/FeeStrategy";
import { FlatFeeStrategy } from "./fee/FlatFeeStrategy";
import { ParkingFloor } from "./ParkingFloor";
import { PaymentStrategy } from "./payment/PaymentStrategy";
import { Ticket } from "./Ticket";
import { Vehicle } from "./vehicle/Vehicle";

export class ParkingLot {
    // Use Singleton design pattern if there can only be a single ParkingLot
    private static instance: ParkingLot;
    private activeTickets: Set<Ticket>;
    private floors: ParkingFloor[];
    private feeStrategy: FeeStrategy;

    private constructor() {
        this.floors = [];
        this.activeTickets = new Set();
        this.feeStrategy = new FlatFeeStrategy();
    }

    static getInstance() {
        if (!ParkingLot.instance) {
            ParkingLot.instance = new ParkingLot();
        }
        return ParkingLot.instance;
    }

    // Using Strategy pattern for calculating fee
    // Provide a method to update the strategy at run time
    setFeeStrategy(strategy: FeeStrategy) {
        this.feeStrategy = strategy;
    }

    addFloor(floor: ParkingFloor) {
        this.floors.push(floor);
    }

    parkVehicle(vehicle: Vehicle): Ticket {
        for (const floor of this.floors) {
            const spot = floor.getParkingSpot(vehicle.type);
            if (spot) {
                spot.park(vehicle);
                const ticket = new Ticket(vehicle, spot);
                this.activeTickets.add(ticket);

                console.log(`Parked ${vehicle.type} with plate ${vehicle.licensePlate} on floor ${floor.number} in spot ${spot.number}.`)

                return ticket;
            }
        }

        throw new Error('No available parking spot!');
    }

    unparkVehicle(ticket: Ticket, paymentStrategy: PaymentStrategy) {
        if (!this.activeTickets.has(ticket)) {
            throw new Error('Invalid Ticket!');
        }

        this.activeTickets.delete(ticket);
        const spot = ticket.parkingSpot;
        spot.unpark();

        ticket.setExitTimestamp();
        const fee = this.feeStrategy.calculateFee(ticket);

        paymentStrategy.makePayment(fee);
    }
}