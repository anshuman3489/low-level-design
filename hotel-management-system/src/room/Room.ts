import { RoomType } from "./RoomType";

export enum RoomStatus {
    AVAILABLE,
    BOOKED,
    OCCUPIED,
}

export abstract class Room {
    abstract type: RoomType;
    status: RoomStatus;

    constructor(public id: string, public price: number) {
        this.status = RoomStatus.AVAILABLE;
    }

    book() {
        if (this.status !== RoomStatus.AVAILABLE) {
            throw new Error('Room is not available!');
        }

        this.status = RoomStatus.BOOKED;
    }

    checkIn() {
        if (this.status !== RoomStatus.BOOKED) {
            throw new Error('Please book the room first!');
        }

        this.status = RoomStatus.OCCUPIED;
    }

    checkOut() {
        if (this.status === RoomStatus.AVAILABLE) {
            throw new Error('Room is not booked or occupied!');
        }

        this.status = RoomStatus.AVAILABLE;
    }
}