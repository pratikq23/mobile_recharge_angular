import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import {LoginService} from '../services/login.service';
import { RoleService } from '../services/role.service';


@Component({
    selector: 'admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.scss'],
    animations: [routerTransition()]
})
export class AdminLoginComponent implements OnInit {
   public username: string;
    public password: string;
    public role_id:any;
    public ErrorPassword:any = true;
    public ErrorUserName:any = true;
    public roleList:any;

    constructor(public router: Router,
        private loginService: LoginService,
        private roleService:RoleService) {
        this.getRoleList();
    }

    ngOnInit() {
    }

     //login user
    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');

        let userObj = {
            username: this.username,
            password: this.password,
            userRole: this.role_id
        }
        this.loginService.sendCredential(userObj).subscribe(
        res => {
          
        },
        err => console.log(err))
    };

    getRoleList() {
        this.roleList = [ {role_name:'Admin',role_id:'1'},
                      {role_name:'Hod',role_id:'2'},
                      {role_name:'Manager',role_id:'3'},
                      {role_name:'Operator',role_id:'4'}
                    ]
    }

}
