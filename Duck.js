import { Bird } from './Bird.js';

export class Duck extends Bird {
  constructor(weight) {
    super(weight);
  }

  quack() {}
  swim() {}
}