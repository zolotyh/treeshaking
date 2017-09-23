void main(){
  final b = new B();
  b.a.log();
}

class A {
  log(){
    print(1);
  }
}

class B {
  A a = new A();
}
