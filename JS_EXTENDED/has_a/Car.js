import Engine from './Engine.js';

export default class Car{

    constructor(name){
        this.name = name;
    }

    setEngine(engine){
        this.engine = engine;
    }

    drive(){
        console.log("I am startin to drive...");
        this.engine.go();
    }
}