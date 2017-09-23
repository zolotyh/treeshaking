void main(){
  final a = new A();
  a.b.log();
}

class A {
  B b;

  A(){
    b = new B();
  }
}

class B {
  void log(){
    print('hello world');
  }
}
