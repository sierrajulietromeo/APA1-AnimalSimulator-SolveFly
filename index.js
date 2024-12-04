import { MallardDuck } from './MallardDuck.js';
import { TuftedDuck } from './TuftedDuck.js';

// Test code
function main() {
    const mallardDuck = new MallardDuck(334);
    const tuftedDuck = new TuftedDuck(256);

    // Test weight getters
    console.log("Mallard weight:", mallardDuck.weight);
    console.log("Tufted weight:", tuftedDuck.weight);

    // Test display methods
    mallardDuck.display();
    tuftedDuck.display();

    // Test feed methods
    mallardDuck.feed();
    tuftedDuck.feed();

    // Test flying capability
    try {
        mallardDuck.fly();
        tuftedDuck.fly();
    } catch(error) {
        console.log("Flying error:", error.message);
    }

}

// Run the tests
main();