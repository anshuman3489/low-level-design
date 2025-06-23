import { Room } from "./Room";
import { RoomType } from "./RoomType";

export class Suite extends Room {
    type: RoomType;

    constructor(id: string, price: number) {
        super(id, price);
        this.type = RoomType.SUITE;
    }

    checkIn(): void {
        console.log('Welcome to your suite! Your breakfast is on us.');
        super.checkIn();
    }
}