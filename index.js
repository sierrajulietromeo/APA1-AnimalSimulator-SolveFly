import { MallardDuck } from './MallardDuck.js';
import { TuftedDuck } from './TuftedDuck.js';
import { Ostrich } from './Ostrich.js';

function main() {
    const mallardDuck = new MallardDuck(334);
    const tuftedDuck = new TuftedDuck(256);
    const ostrich = new Ostrich(45000);  // Ostriches are heavy!

    // Test weight getters
    console.log("Mallard weight:", mallardDuck.weight);
    console.log("Tufted weight:", tuftedDuck.weight);
    console.log("Ostrich weight:", ostrich.weight);


    // Test display methods
    mallardDuck.display();
    tuftedDuck.display();
    ostrich.display();
    
    // Test feed methods
    mallardDuck.feed();
    tuftedDuck.feed();
    ostrich.feed();

    // Test flying capability
    try {
        mallardDuck.fly();
        tuftedDuck.fly();
        ostrich.fly(); // Note: Ostrich doesn't implement fly()
    } catch(error) {
        console.log("Flying error:", error.message);
    }

}

main();