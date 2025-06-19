import { Broker } from "./broker";
import { Message } from "./message";

export class Publisher {
    id: string;
    broker: Broker;

    constructor(id: string, broker: Broker) {
        this.id = id;
        this.broker = broker;
    }

    publish(topicName: string, payload: string) {
        const message = new Message(payload);
        this.broker.publish(topicName, message);
    }
}