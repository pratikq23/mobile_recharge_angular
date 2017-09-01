import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ChangePasswordComponent } from './change-password.component';

const routes: Routes = [
    { path: '', component: ChangePasswordComponent }
];

@NgModule({
    imports: [FormsModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangePasswordRoutingModule { }
