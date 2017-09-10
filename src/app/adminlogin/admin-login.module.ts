import { CommonModule } from '@angular/common';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';
import { LoginService } from '../services/login.service';
import { RoleService } from '../services/role.service';


@NgModule({
    imports: [
        CommonModule,
        AdminLoginRoutingModule,
        FormsModule
    ],
    declarations: [AdminLoginComponent],
      providers: [
    LoginService,
    RoleService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminLoginModule {
}
