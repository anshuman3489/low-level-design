import { Guest } from "./Guest";
import { Hotel } from "./Hotel";
import { CardPaymentStrategy } from "./payment/CardPaymentStrategy";
import { RoomType } from "./room/RoomType";

class HotelDemo {
    run() {
        const hotel = Hotel.getInstance();

        const room1 = hotel.addRoom('101', 1000, RoomType.STANDARD);
        const room2 = hotel.addRoom('102', 1000, RoomType.STANDARD);
        const suite = hotel.addRoom('201', 5000, RoomType.SUITE);

        const guest1 = new Guest('John Doe', '8888812345');
        const guest2 = new Guest('Ana', '9999912345');

        // book a suite
        const availableSuite = hotel.getAvailableRoom(RoomType.SUITE);
        const reservation1 = hotel.bookRoom(availableSuite, guest1, new Date('17-June-2025'), new Date('20-June-2025'));
        hotel.checkIn(reservation1.id);
        hotel.checkOut(reservation1.id, new CardPaymentStrategy());

        console.log('--------------------------------------------');

        // cancel reservation
        const reservation2 = hotel.bookRoom(room2, guest2, new Date('21-June-2025'), new Date('22-June-2025'));
        hotel.cancelReservation(reservation2.id);

        console.log('--------------------------------------------');

        // no available rooms
        const reservation3 = hotel.bookRoom(room1, guest1, new Date('21-June-2025'), new Date('22-June-2025'));
        const reservation4 = hotel.bookRoom(room2, guest2, new Date('21-June-2025'), new Date('22-June-2025'));
        const room = hotel.getAvailableRoom(RoomType.STANDARD);

        console.log('--------------------------------------------');
    }
}

new HotelDemo().run();