import { Bird } from './Bird.js';

export class Ostrich extends Bird {
    constructor(weight) {
        super(weight);
    }

    display() {
        console.log("I'm a real Ostrich");
    }

    feed() {
        console.log("I peck to feed.");
    }
}