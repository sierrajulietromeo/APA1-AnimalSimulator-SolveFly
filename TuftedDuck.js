import { Duck } from './Duck.js';
import { Flyable } from './Flyable.js';

export class TuftedDuck extends Duck {
    constructor(weight) {
        super(weight);
    }

    display() {
        console.log("I'm a real Tufted duck");
    }

    feed() {
        console.log("I dive to feed.");
    }

    fly() {
        console.log("Tufted Duck is flying!");
    }
}