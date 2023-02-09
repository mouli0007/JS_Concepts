// Es6 classes

class Vehicle {
  constructor() {
    this.wheels = 4;
    this.service = true;
  }

  ready() {
    console.log("Ready to go ");
    console.log((this.wheels += 90));
  }

  output() {
    console.log((this.wheels += 99));
    console.log(this.service);
  }
}

const v1 = new Vehicle();

v1.ready();
v1.output();

class Motorcycle extends Vehicle {
  constructor() {
    super();
    // this.wheels = 200;
  }

  wheel() {
    console.log("On Wheel now !");
    console.log(this.wheels);
    console.log(this.service);
  }
}

const myBike = new Motorcycle();

myBike.ready();
myBike.wheel();
