import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';
import { LoginService } from './login.service';
import { RoleService } from './role.service';


@NgModule({
    imports: [
        CommonModule,
        AdminLoginRoutingModule
    ],
    declarations: [AdminLoginComponent],
      providers: [
    LoginService,
    RoleService
  ],
})
export class AdminLoginModule {
}
