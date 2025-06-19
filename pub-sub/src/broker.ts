import { Message } from "./message";
import { ISubscriber } from "./subscriber";
import { Topic } from "./topic";

export class Broker {
    private topics: Map<string, Topic>;

    constructor() {
        this.topics = new Map();
    }

    createTopic(name: string) {
        if (this.topics.has(name)) {
            console.log(`Topic ${name} already present`);
            return;
        }

        this.topics.set(name, new Topic(name));
    }

    private getTopic(name: string) {
        const topic = this.topics.get(name);
        if (!topic) {
            throw new Error(`Invalid Topic: ${name}`);
        }
        return topic;
    }

    subscribe(topicName: string, subscriber: ISubscriber) {
        const topic = this.getTopic(topicName);
        topic.addSubscriber(subscriber);
    }

    unsubscribe(topicName: string, subscriber: ISubscriber) {
        const topic = this.getTopic(topicName);
        topic.removeSubscriber(subscriber);
    }

    publish(topicName: string, message: Message) {
        const topic = this.getTopic(topicName);
        topic.notifySubscribers(message);
    }
}