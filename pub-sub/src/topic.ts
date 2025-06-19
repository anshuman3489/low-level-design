import { Message } from "./message";
import { ISubscriber } from "./subscriber";

export class Topic {
    name: string;
    subscribers: Set<ISubscriber>;

    constructor(name: string) {
        this.name = name;
        this.subscribers = new Set();
    }

    addSubscriber(subscriber: ISubscriber) {
        this.subscribers.add(subscriber);
    }

    removeSubscriber(subscriber: ISubscriber) {
        this.subscribers.delete(subscriber);
    }

    notifySubscribers(message: Message) {
        for (const subscriber of this.subscribers) {
            subscriber.consume(message);
        }
    }
}