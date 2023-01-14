// imports Car constructor function
const {Car} = require("./car");


// before each function to set the foundations for testing
beforeEach(() => {
    // initialise a Car object
    car1 = new Car("BMW 1 Series", 10000, "Hybrid")
})

describe("manufacturer test", () => {
    test("can access manufacturer info", () => {
        expected = "BMW 1 Series";
        actual = car1.manufacturer;
        expect(actual).toBe(expected);
    })
    

})
