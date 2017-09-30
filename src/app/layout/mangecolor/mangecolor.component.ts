import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { DataTableResource } from 'angular-4-data-table';
import {ColorService} from '../../services/color.service';


@Component({
    selector: 'managecolor-page',
    templateUrl: './mangecolor.component.html',
    styleUrls: ['./mangecolor.component.scss']
})
export class MangeColorComponent  {
  
     public colorList = [];
    
    public itemCount = 0;
    public items = [];
    public activeStatus:any = 1;
    public userRole:any = 1;
    public colorListSize:any = 10;
    
    

    constructor(public colorService: ColorService) {

        //this.itemResource.count().then(count => this.itemCount = count);
    }

     ngOnInit() {
      
        this.getColorList();
    }

    reloadItems(params) {
        //this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }

     getColorList() {
        let filterObj = {
                            "activeStatus":this.activeStatus,
                            "userRole":this.userRole,
                            "size":this.colorListSize
                        }
        this.colorService.getColorList(filterObj).subscribe(
        res => {
            if(res.response.status == true) {
                this.colorList= res.data; 

            } 
                    
        },
        err => console.log(err))
    }
}
