import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
    selector: 'change-password-page',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent  {
    public userId:any;
    public oldPassword:any;
    public newPassword:any;
    public CfrmPassword:any;
   
    constructor(public router:Router){
    	
    }

    //on form submit
    onSubmit() {

    }


    valuechange(event:any){
     
    }
}
