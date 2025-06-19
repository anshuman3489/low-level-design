import { Message } from "./message";
import { ISubscriber } from "./subscriber";

export class LoggingSubscriber implements ISubscriber {
    id: string;

    constructor(id: string) {
        this.id = id;
    }
    
    consume(message: Message): void {
        console.log(`Logging subscriber ${this.id} received message: ${message.getPayload()}`);
    }
}