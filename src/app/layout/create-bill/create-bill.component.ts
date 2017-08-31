import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
    selector: 'addcolor-page',
    templateUrl: './create-bill.component.html',
    styleUrls: ['./create-bill.component.scss']
})
export class CreateBillComponent  {
    public color: string;
   
    constructor(public router:Router){
    	
    }

    //on form submit
    onSubmit() {

    }


    valuechange(event:any){
     
    }
}
