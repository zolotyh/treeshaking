if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlin_example'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin_example'.");
}
var kotlin_example = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    var car = new Car();
    car.wheel.pump();
  }
  function Car() {
    this.wheel = new Wheel();
  }
  Car.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Car',
    interfaces: []
  };
  function Wheel() {
  }
  Wheel.prototype.pump = function () {
    println('puuuuuf');
  };
  Wheel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Wheel',
    interfaces: []
  };
  function Rudder() {
  }
  Rudder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Rudder',
    interfaces: []
  };
  _.main_kand9s$ = main;
  _.Car = Car;
  _.Wheel = Wheel;
  var package$testpackage = _.testpackage || (_.testpackage = {});
  package$testpackage.Rudder = Rudder;
  main([]);
  Kotlin.defineModule('kotlin_example', _);
  return _;
}(typeof kotlin_example === 'undefined' ? {} : kotlin_example, kotlin);
