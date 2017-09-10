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

    constructor(public router: Router,
        private loginService: LoginService ) {
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


}
