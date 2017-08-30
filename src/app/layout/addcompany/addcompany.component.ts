import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
    selector: 'addcompany-page',
    templateUrl: './addcompany.component.html',
    styleUrls: ['./addcompany.component.scss']
})
export class AddCompanyComponent  {
    public companyname: string;
    public companytype: string;
    public companyTypeList = [{name:'Recharge'},{name:'Mobile'},{name:'Tablets'}]
    constructor(public router:Router){
    	
    }

    //on form submit
    onSubmit() {

    }


    valuechange(event:any){
     
    }
}
