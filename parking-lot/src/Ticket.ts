import { randomUUID } from "node:crypto";
import { ParkingSpot } from "./ParkingSpot";
import { Vehicle } from "./vehicle/Vehicle";

export class Ticket {
    private entryTimestamp: number;
    private exitTimestamp: number;
    ticketId: string;

    constructor(public vehicle: Vehicle, public parkingSpot: ParkingSpot) {
        this.ticketId = randomUUID();
        this.entryTimestamp = Date.now();
    }

    setExitTimestamp() {
        this.exitTimestamp = Date.now();
    }

    getDuration() {
        if (!this.exitTimestamp) {
            throw new Error('Parking still active!');
        }

        return this.exitTimestamp - this.entryTimestamp;
    }
}