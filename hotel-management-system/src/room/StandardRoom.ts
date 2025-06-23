import { Room } from "./Room";
import { RoomType } from "./RoomType";

export class StandardRoom extends Room {
    type: RoomType;

    constructor(id: string, price: number) {
        super(id, price);
        this.type = RoomType.STANDARD;
    }
}