# Bird Classification System
A JavaScript-based object-oriented programming demonstration implementing a bird classification system with inheritance hierarchies.
## Class Structure
- `Animal` (base class)
  - `Bird`
    - `Duck`
      - `MallardDuck` (can fly, dabbles to feed)
      - `TuftedDuck` (can fly, dives to feed)
    - `Ostrich` (flightless, pecks to feed)

## Class Diagram

```mermaid
classDiagram
Animal <|-- Bird
Bird <|-- Duck
Bird <|-- Ostrich
Duck <|-- MallardDuck
Duck <|-- TuftedDuck
class Animal {
    +Number weight
    +display()
    +feed()
}

class Bird {
}

class Duck {
    +quack()
    +swim()
}

class MallardDuck {
    +display()
    +feed()
    +fly()
}

class TuftedDuck {
    +display()
    +feed()
    +fly()
}

class Ostrich {
    +display()
    +feed()
}
```

## Features
- Inheritance hierarchy demonstrating OOP principles
- Different bird behaviours:
  - Ducks
    - Mallards dabble to feed
    - Tufted ducks dive to feed
    - Both can fly
  - Ostrich
    - Pecks to feed
    - Cannot fly
- Weight tracking for all animals