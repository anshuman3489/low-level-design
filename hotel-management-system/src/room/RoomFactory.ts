import { Suite } from "./Suite";
import { RoomType } from "./RoomType";
import { StandardRoom } from "./StandardRoom";

export class RoomFactory {
    static createRoom(id: string, type: RoomType, price: number) {
        switch(type) {
            case RoomType.STANDARD:
                return new StandardRoom(id, price);
            case RoomType.SUITE:
                return new Suite(id, price);
            default:
                throw new Error('Invalid room type!');
        }
    }
}