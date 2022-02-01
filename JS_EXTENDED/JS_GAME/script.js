import Rectangle from "./Actor/Rectangle.js";
import Actor from './Actor/Actor.js';
import ControllableRectangle from "./ControllableRectangle.js";
import kreis from "./Actor/kreis.js";

let actors  = [];

actors.push(new Rectangle(50,50));
actors.push(new ControllableRectangle());
actors.push(new kreis(100,100));

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


setInterval(function(){
    context.clearRect(0,0,400,400);
    actors.forEach(actor =>{
        actor.render(context);
        actor.update();
    })
 
},10);

