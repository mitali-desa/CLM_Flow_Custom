import { LightningElement } from 'lwc';

export default class HelloWord extends LightningElement {
    name = 'BikeDemo';
    description="Bike desc";
    production="production";
    material="material";
    imageurl="https://unsplash.com/s/photos/motorbike";
    ready=false;

    connectedCallback(){
        setTimeout(()=>{
            this.ready = true;
        },3000 );
    }
}
