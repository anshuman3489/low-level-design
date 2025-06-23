import { Guest } from "./Guest";
import { Room } from "./room/Room";

enum ReservationStatus {
    CONFIRMED,
    CANCELED,
}

export class Reservation {
    status: ReservationStatus;

    constructor(public id: string, public room: Room, public guest: Guest, public checkInDate: Date, public checkOutDate: Date) {
        this.status = ReservationStatus.CONFIRMED;
    }

    cancel() {
        if (!(this.status !== ReservationStatus.CONFIRMED)) {
            throw new Error('Reservation is already canceled');
        }
        
        this.status = ReservationStatus.CANCELED;
        this.room.checkOut();
    }

    private getDays() {
        const durationInMs = this.checkOutDate.getTime() - this.checkInDate.getTime();
        const days = durationInMs / (1000 * 60 * 60 * 24);
        return Math.ceil(days);
    }

    getTotalAmount() {
        const days = this.getDays();
        const price = this.room.price;
        return days * price;
    }
}