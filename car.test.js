// imports Car constructor function
const {Car} = require("./car");


// before each function to set the foundations for testing
beforeEach(() => {
    // initialise a Car object
    Car = new Car("BMW 1 Series", 10000, "Hybrid")
})
