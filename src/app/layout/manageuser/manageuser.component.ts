import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';
import { DataTableResource } from 'angular-4-data-table';

import { UserService } from '../../services/user.service';


@Component({
    selector: 'manageuser-page',
    templateUrl: './manageuser.component.html',
    styleUrls: ['./manageuser.component.scss']
})
export class ManageUserComponent implements OnInit {
    public persons = [];
    public itemResource = new DataTableResource(this.persons);
    public itemCount = 0;
    public items = [];
    public activeStatus:any = 1;
    public userRole:any = 1;
    public userListSize:any = 10;



    constructor(public userService:UserService) {
        
        this.itemResource.count().then(count => this.itemCount = count);
    }

     ngOnInit() {
      
        this.getUserList();
    }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { 
        return item.jobTitle; 
    }

    //get user list
    getUserList() {
        let filterObj = {
                            "activeStatus":this.activeStatus,
                            "userRole":this.userRole,
                            "size":this.userListSize
                        }
        this.userService.getUserList(filterObj).subscribe(
        res => {
            if(res.response.status == true) {
                this.persons = res.data; 
                console.log(this.persons.length)

            } 
                    
        },
        err => console.log(err))
    }

}
