import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { DataTableResource } from 'angular-4-data-table';
import {CompanyService} from '../../services/company.service';

@Component({
    selector: 'managecompany-page',
    templateUrl: './managecompany.component.html',
    styleUrls: ['./managecompany.component.scss']
})
export class ManageCompanyComponent  {
   
     public companyList = [];
    
    public itemCount = 0;
    public items = [];
    public activeStatus:any = 1;
    public userRole:any = 1;
    public companyListSize:any = 10;
    

    
 constructor(public companyService:CompanyService) {
        
    }

    ngOnInit() {
      
        this.getCompanyList();
    }

    reloadItems(params) {
        
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }
//get user list
    getCompanyList() {
        let filterObj = {
                            "activeStatus":this.activeStatus,
                            "userRole":this.userRole,
                            "size":this.companyListSize
                        }
        this.companyService.getCompanyList(filterObj).subscribe(
        res => {
            if(res.response.status == true) {
                this.companyList = res.data; 

            } 
                    
        },
        err => console.log(err))
    }

}
