import { Battery } from "./battery.js";


export default class Remote{

    isOn = false
    constructor(hasPower1,hasPower2){
        this.hasPower1 = hasPower1;
        this.hasPower2 = hasPower2;
    }

    getStatus(){
        let avg = (this.hasPower1 + this.hasPower2) / 2;
        console.log("Durchschnittliche Batteriekapazität: " + avg);
    }

    hasPower(){
        let t = false;
        if(this.hasPower1 > 50){
            t = true;
            console.log("Ladestatus: " + t);
        }
        else{
            t = false;
            console.log("Ladestatus: " + t);
        }

        if(this.hasPower2 > 50){
            t = true;
            console.log("Ladestatus: " + t);
        }
        else{
            t = false;
            console.log("Ladestatus: " + t);
        }
    }
    TurnOn(){        
        if(!this.isOn){
            this.isOn = true;
            console.log("Turned on!")
            let newpower1 = this.hasPower1 - 5
            let newpower2 = this.hasPower2 - 5
        }
        else{
            console.log("Batterie ist bereits in Verwendung!")
        }        
    }

    turnOff(){
        if(this.isOn){
            console.log("Wird heruntergefahren!");
            this.isOn = false;
        }
        else{
            console.log("Muss erst eingeschaltet werden, damit es ausgeschalten werden kann!")
        }
    }
}
