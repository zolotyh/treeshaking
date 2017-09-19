class C1 {
  log(){
    console.log('I am alive')
  }
}

class C2 {
	constructor(){
      this.c1 = new C1()
    }
}

const c2 = new C2();
c2.c1.log();


