const { Car } = require("./car");
const {Dealership} = require("./dealership");

// let dealership1;
// let car1;
// let car2;
// let car3;
// let car4;

beforeEach(() => {
    // Initialise a dealership object
   dealership1 = new Dealership("Reb's Dealership", 4);
   // Initialise cars 
   car1 = new Car("BMW 1 Series", 20000, "Hybrid")
   car2 = new Car("Ford Focus", 150000, "Deisel");
   car3 = new Car("Mercedes S Class", 46000, "Hybrid");
   // adds cars to dealership1
   dealership1.addCars(car1);
   dealership1.addCars(car2);
   dealership1.addCars(car3);
})

describe("dealership tests", () => {
    // Testing if I can add cars to dealership1 object
    test("can add cars to a dealership object", () => {
        car4 = new Car("Mini Cooper", 8000, "petrol");
        expected = 4;
        actual = dealership1.addCars(car4);
    })

    // Testing countCars method
    test("can count the cars in stock at a dealership", () => {
        expected = 3;
        actual = dealership1.countCars();
        expect(actual).toBe(expected);
    })
})