import 'dart:html';

void main(){
  final car = new Car();
  car.wheel.pump();
}

class Car {
  Wheel wheel = new Wheel();
}

class Wheel {
  pump(){
    document.querySelector('div');
  }
}
