import { Battery } from "./battery.js";
import Remote from "./remote.js";


let battery1 = new Battery(80);
let battery2 = new Battery(10);

let remote = new Remote(battery1.chargingStatus,battery2.chargingStatus);

remote.getStatus();
remote.hasPower(); 
 
remote.TurnOn();
remote.turnOff();


