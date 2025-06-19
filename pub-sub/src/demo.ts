import { Broker } from "./broker";
import { LoggingSubscriber } from "./logging-subscriber";
import { PrintSubscriber } from "./print-subscriber";
import { Publisher } from "./publisher";

const TOPICS = {
    FRUITS: 'fruits',
    SPORTS: 'sports',
}

export class Demo {
    run() {
        const broker = new Broker();

        broker.createTopic(TOPICS.FRUITS);
        broker.createTopic(TOPICS.SPORTS);

        const publisher = new Publisher('1', broker);

        const subscriber1 = new PrintSubscriber('1');
        broker.subscribe(TOPICS.FRUITS, subscriber1);
        broker.subscribe(TOPICS.SPORTS, subscriber1);

        const subscriber2 = new LoggingSubscriber('2');
        broker.subscribe(TOPICS.SPORTS, subscriber2);

        publisher.publish(TOPICS.FRUITS, 'apple');
        publisher.publish(TOPICS.SPORTS, 'cricket');

        broker.unsubscribe(TOPICS.FRUITS, subscriber1);

        publisher.publish(TOPICS.FRUITS, 'mango');
        publisher.publish(TOPICS.SPORTS, 'football');
    }
}

new Demo().run();