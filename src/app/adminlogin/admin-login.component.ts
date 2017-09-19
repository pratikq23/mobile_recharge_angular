import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import {LoginService} from '../services/login.service';
import { RoleService } from '../services/role.service';
import { SharedService } from '../shared/services/shared.service';


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
        private sharedService:SharedService,
        private loginService: LoginService,
        private roleService:RoleService) {
        this.getRoleList();
    }

    ngOnInit() {
    }

     //login user
    onLoggedin() {
        let link = ['/dashboard'];
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
                this.sharedService.setLoginObj(res.data[0]);
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('userObj', res.data[0]);
                this.router.navigate(link);
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
