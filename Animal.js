export class Animal {
  constructor(weight) {
    this.weight = weight;
  }

  display() {
    throw new Error('Method display() must be implemented');
  }

  feed() {
    throw new Error('Method feed() must be implemented');
  }
}
