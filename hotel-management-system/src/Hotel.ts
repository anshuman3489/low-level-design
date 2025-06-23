import { randomUUID } from "node:crypto";
import { Reservation } from "./Reservation";
import { Room, RoomStatus } from "./room/Room";
import { RoomFactory } from "./room/RoomFactory";
import { RoomType } from "./room/RoomType";
import { Guest } from "./Guest";
import { PaymentStrategy } from "./payment/PaymentStrategy";

export class Hotel {
    static instance: Hotel;
    rooms: Map<string, Room>;
    reservations: Map<string, Reservation>;

    private constructor() {
        this.rooms = new Map();
        this.reservations = new Map();
    }

    static getInstance() {
        if (!Hotel.instance) {
            Hotel.instance = new Hotel();
        }
        return Hotel.instance;
    }

    addRoom(id: string, price: number, type: RoomType): Room {
        let room = this.rooms.get(id);
        if (room) {
            console.warn('Room already exists');
            return room;
        }

        room = RoomFactory.createRoom(id, type, price);
        this.rooms.set(id, room);
        console.log(`${type} Room ${id} created!`);
        return room;
    }

    getAvailableRoom(type: RoomType): Room {
        for (const room of this.rooms.values()) {
            if (room.type === type && room.status === RoomStatus.AVAILABLE) {
                return room;
            }
        }

        console.log(`No ${type} room is available`);
        return null;
    }
    
    bookRoom(room: Room, guest: Guest, checkInDate: Date, checkOutDate: Date): Reservation {
        if (checkInDate > checkOutDate) {
            throw new Error(`Check-in date can't be later than check-out date!`);
        }
        
        room.book();
        const reservationId = randomUUID();
        const reservation = new Reservation(reservationId, room, guest, checkInDate, checkOutDate);
        this.reservations.set(reservationId, reservation);
        return reservation;
    }
    
    cancelReservation(id: string) {
        const reservation = this.reservations.get(id);
        if (reservation) {
            reservation.cancel();
            this.reservations.delete(id);
        }
    }
    
    checkIn(reservationId: string) {
        const reservation = this.reservations.get(reservationId);
        if (!reservation) {
            throw new Error('Invalid reservation!');
        }

        reservation.room.checkIn();
    }
    
    checkOut(reservationId: string, payment: PaymentStrategy) {
        const reservation = this.reservations.get(reservationId);
        if (!reservation) {
            throw new Error('Invalid reservation!');
        }

        const paymentAmount = reservation.getTotalAmount();
        payment.makePayment(paymentAmount);
        
        reservation.room.checkOut();
        this.reservations.delete(reservationId);
    }
}