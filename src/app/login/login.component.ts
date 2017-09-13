import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import {LoginService} from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    public username: string;
    public password: string;
    public role_id:any;
    public ErrorPassword:any = true;
    public ErrorUserName:any = true;
    public roleList:any;
    public errMsgval:any = true;
    public errorMsg = '';

    constructor(public router: Router,
        private loginService: LoginService ) {
    }

    ngOnInit() {
    }

    //login user
    onLoggedin() {
       let userObj = {
            username: this.username,
            password: this.password,
            userRole: 1
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

valuechange(env) {
    this.errMsgval = true;
    this.errorMsg = '';
}
    

}
