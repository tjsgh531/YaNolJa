import { Header } from "./header.js";

class Main{
    constructor(){
        this.header = new Header();
    }
}

window.onload = ()=>{
    new Main();    
}