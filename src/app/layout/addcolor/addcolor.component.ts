import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
    selector: 'addcolor-page',
    templateUrl: './addcolor.component.html',
    styleUrls: ['./addcolor.component.scss']
})
export class AddColorComponent  {
    public color: string;
   
    constructor(public router:Router){
    	
    }

    //on form submit
    onSubmit() {

    }


    valuechange(event:any){
     
    }
}
