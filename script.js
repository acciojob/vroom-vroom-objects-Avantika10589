function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add method to Car prototype
Car.prototype.getMakeModel = function() {
  return this.make + " " + this.model;
};

function SportsCar(make, model, topSpeed) {
  // Call Car constructor to inherit properties
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Reset constructor (important step after inheritance)
SportsCar.prototype.constructor = SportsCar;

// Add method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
