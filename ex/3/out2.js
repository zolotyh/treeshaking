function n(){}
n.prototype.pump=function(){console.log("puuuuh")},
(new function(){this.wheel=new n}).wheel.pump();
