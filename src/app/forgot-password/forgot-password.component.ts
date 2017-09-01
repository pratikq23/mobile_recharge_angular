import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
    selector: 'forgot-password-page',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent  {
    public userName: string;
   
    constructor(public router:Router){
    	
    }

    //on form submit
    onSubmit() {

    }
}
