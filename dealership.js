const Dealership = function(name, maxNumbOfCars, carsInStock){
    this.name = name;
    this.maxNumbOfCars = maxNumbOfCars;
    this.carsInStock = [];
}

// Method to count number of stock
Dealership.prototype.countCars = function() {
    return this.carsInStock.length;
}

// Method to add cars to a dealership object
Dealership.prototype.addCars = function(car) {
    return this.carsInStock.push(car);
}

// export function for testing
module.exports = {Dealership};