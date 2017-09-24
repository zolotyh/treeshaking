fun main(args: Array<String>) {
    var car = Car();
    car.wheel.pump();
}


class Car {
    val wheel: Wheel = Wheel();
}

