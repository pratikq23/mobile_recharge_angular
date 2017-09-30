import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { DataTableResource } from 'angular-4-data-table';
import {ModalService} from '../../services/modal.service'

@Component({
    selector: 'managemodel-page',
    templateUrl: './managemodel.component.html',
    styleUrls: ['./managemodel.component.scss']
})
export class ManageModelComponent  {
   
    public companyList = [];
    
    public itemCount = 0;
    public items = [];
    public activeStatus:any = 1;
    public userRole:any = 1;
    public modalNamesList:any = 10;
    

    
 constructor(public modalService:ModalService) {
        
    }

    ngOnInit() {
      this.getModelList();
        
    }
    
    reloadItems(params) {
    //    this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }

    //get company list
    getModelList() {
        let filterObj = {
                            "activeStatus":this.activeStatus,
                            "userRole":this.userRole,
                            "size":this.modalNamesList
                        }
        this.modalService.getCompanyList(filterObj).subscribe(
        res => {
            if(res.response.status == true) {
                this.modalNamesList = res.data; 

            } 
                    
        },
        err => console.log(err))
    }
}
