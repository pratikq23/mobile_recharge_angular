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
    public errMsgval:any = true;
    public errorMsg = '';
    public roleList = []

    constructor(public router: Router,
        private loginService: LoginService,
        private roleService:RoleService) {
        this.getRoleList();
    }

    ngOnInit() {
    }

     //login user
    onLoggedin() {
        let userObj = {
            username: this.username,
            password: this.password,
            userRole: this.role_id
        }
        this.loginService.sendCredential(userObj).subscribe(
        res => {
            if(res.response.status == false){
                this.errMsgval = false;
                this.errorMsg = res.response.message;
            }else {
                localStorage.setItem('isLoggedin', 'true');
            }
            
        },
        err => console.log(err))
    };

    getRoleList() {
        this.roleList = 
        [ {role_name:'Admin',role_id:'1'},
          {role_name:'Hod',role_id:'2'},
          {role_name:'Manager',role_id:'3'},
          {role_name:'Operator',role_id:'4'}
        ]
    }

    valuechange(event){
        this.errMsgval = true;
        this.errorMsg = '';
    }

}
