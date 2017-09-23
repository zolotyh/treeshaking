function A() {
}

A.prototype.log = function(){
  console.log(1);
}


function B(){
  this.a = new A();
}

var c = new B();
c.a.log();

