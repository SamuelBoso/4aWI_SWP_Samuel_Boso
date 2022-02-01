import Actor from "./Actor.js";

export default class kreis extends Actor{

    direction = 0;

    constructor(x = 80,y = 80){
        super();
        this.x = x; 
        this.y = y;
    }
    render(context){
        context.beginPath();
        context.arc( this.x, this.y, 8, 0, Math.PI * 2);
        context.strokeStyle = 'red';
        context.fill();
        context.stroke();
    }
    update(){
        if(this.direction === 0){
            this.y++;
        }
        else{
            this.y--;
        }

        if(this.y>400){
            this.y= 1;
        }
       
    }
}