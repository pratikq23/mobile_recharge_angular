import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

import {LoginService} from '../services/login.service';
import { SharedService } from '../shared/services/shared.service';

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
        private sharedService:SharedService,
        private loginService: LoginService ) {
    }

    ngOnInit() {
    }

    //login user
    onLoggedin() {
        let link = ['/dashboard'];
        let userObj = {
            username: this.username,
            password: this.password,
            userRole: 5
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

    valuechange(env) {
        this.errMsgval = true;
        this.errorMsg = '';
    }
    

}
