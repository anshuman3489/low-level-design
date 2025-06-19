export class Message {
    payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    getPayload() {
        return this.payload;
    }
}