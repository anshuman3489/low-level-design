import { Message } from "./message";
import { ISubscriber } from "./subscriber";

export class PrintSubscriber implements ISubscriber {
    id: string;

    constructor(id: string) {
        this.id = id;
    }

    consume(message: Message): void {
        console.log(`Print subscriber ${this.id} received message: ${message.getPayload()}`)
    }
}