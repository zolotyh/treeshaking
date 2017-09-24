function Car(){
  this.wheel = new Wheel();
}

function Wheel(){

}

Wheel.prototype.pump = function(){
  console.log('puuuuh');
}

var car = new Car();
car.wheel.pump();
