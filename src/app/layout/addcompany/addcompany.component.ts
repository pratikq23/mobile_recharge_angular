import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
    selector: 'addcompany-page',
    templateUrl: './addcompany.component.html',
    styleUrls: ['./addcompany.component.scss']
})
export class AddCompanyComponent  {
    public companyname: string;
  	public logInObj:any;

  constructor(
  	
  	public router:Router){
  	
  }

  onSubmit() {

  }


  valuechange(event:any){
   
  }
}
