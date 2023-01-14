const Dealership = function(name, maxNumbOfCars, carsInStock){
    this.name = name;
    this.maxNumbOfCars = maxNumbOfCars;
    this.carsInStock = carsInStock;
}

// Method to count number of stock
Dealership.prototype.countCars = function() {
    return this.carsInStock.length;
}