import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    greeting = "welcome";
    changeHandler(event){
        this.greeting = event.target.value;
    }
     
}