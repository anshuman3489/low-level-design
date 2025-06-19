import { Message } from './message';

export interface ISubscriber {
    id: string;
    consume(message: Message): void;
}