import { Duck } from './Duck.js';
import { Flyable } from './Flyable.js';


export class MallardDuck extends Duck {
  constructor(weight) {
    super(weight);
  }

  // Implementing the "interface" methods
  fly() {
    console.log("Mallard is flying!");
  }

  display() {
    console.log("I'm a real Mallard duck");
  }

  feed() {
    console.log("I dabble to feed.");
  }
}