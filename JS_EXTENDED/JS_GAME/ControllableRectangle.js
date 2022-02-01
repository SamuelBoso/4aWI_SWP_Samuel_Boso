import Actor from "./Actor/Actor.js";

export default class ControllableRectangle extends Actor{
    
    constructor(){
        super();
        this.x = 20;
        this.y = 20;
        let that = this;
        document.addEventListener("keypress",function(key){
        
            if(key.key === "j"){
                that.x += 30
            }
            else if(key.key === "l"){
                that.x -= 30;
            }
            else if(key.key === "i"){
                that.y -= 30;
            }
            else if(key.key === "m"){
                that.y += 30;
            }

        })
    }
    
    
    render(context){
        context.fillRect(this.x,this.y,30,30);
    }
    update(){

    }
}