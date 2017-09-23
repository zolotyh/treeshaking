/**
 * @constructor
 */
function C1() {

}

C1.prototype.log = function(){
  console.log('logger');
}

/**
 * @constructor
 */
function C2() {
  this.c1 = new C1();
}

var c2 = new C2();

c2.c1.log();
