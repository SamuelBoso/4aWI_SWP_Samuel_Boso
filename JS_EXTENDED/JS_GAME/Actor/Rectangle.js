import Actor from "./Actor.js";

export default class Rectangle extends Actor{

    direction = 0;

    constructor(x = 10,y = 10){
        super();
        this.x = x; 
        this.y = y;
    }
    render(context){
       context.fillRect(this.x,this.y,30,20);
    }

    update(){
        if(this.direction === 0){
            this.x++;
        }
        else{
            this.x--;
        }

        if(this.x>400){
            this.direction=1;
            this.x= 399;
        }
        if(this.x<0){
            this.direction = 0;
            this.x = 1;
        }
    }
}