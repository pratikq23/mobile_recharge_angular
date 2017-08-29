import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { RoleService } from './role.service';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
     providers: [
    LoginService,
    RoleService
  ],
})
export class LoginModule {
}
