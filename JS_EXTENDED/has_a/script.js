import Car from './Car.js';
import Engine from './Engine.js';
import SuperCar from './supercar.js';

//let c1 = new Car("ferrari 1");
//let c2 = new Car("ferrari 2");

//let e1 = new Engine("123");
//let e2 = new Engine("987");

//c1.setEngine(e1);

//c1.drive();


let e1 = new Engine("123");
let c1 = new Car("f1");
c1.setEngine(e1)
let c2 = new SuperCar("sc1");
c2.setEngine(e1);



c1.drive();

c2.drive();
c2.saySomethingSuperDuper();
