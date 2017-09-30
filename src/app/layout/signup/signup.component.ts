import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router }  from '@angular/router';
import {UserService} from '../../services/user.service';
import { AlertService } from '../../shared/components/Alert/alert.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {public registerForm: FormGroup;
  public roleList:any = {role_name  :'select',role_id:'0'}
  public succesmsg:any = true;
  public logInObj:any;
  loading = false;
   model: any = {};

  constructor(private fb: FormBuilder,
    public userService:UserService,
    public router:Router,
    private alertService: AlertService) {
    this.createForm();
    this.getRoleList();
    //this.logInObj = this.sharedService.getLoginObj();  
  }


  ngOnInit() {}

  createForm() {
    this.registerForm = this.fb.group({ // <-- the parent FormGroup
      firstname: ['', Validators.required ],
      lastname:['', Validators.required ],
      username:['', Validators.required ],
      mobile:['',Validators.required],
      mobileTwo:['',Validators.required],
      email:['',Validators.required],
      addressOne:['',Validators.required],
      addressTwo:['',Validators.required],
      userRole:['',Validators.required]      
    });

  }

  onSubmit() {
    if(!!this.registerForm){
      var userObj = this.registerForm.value;
      userObj.password = 'admin';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
      userObj.via = 1;
      userObj.activeStatus = 1;
      this.userService.registerUser(userObj).subscribe(
        res => {
          {
            console.log(res);
            if(res.response.statusResponse == 1) {
              this.succesmsg = false;
              this.alertService.success('Registration successful', true);
              //this.router.navigate(['/login']);
              this.router.navigate(['/adminview'])
            }
          }   
        } 
      );
    }
  }

  getRoleList() {
    this.roleList = [ {role_name:'Admin',role_id:'1'},
                      {role_name:'Hod',role_id:'2'},
                      {role_name:'Manager',role_id:'3'},
                      {role_name:'Operator',role_id:'4'}
                    ]
  }

  
  
}
