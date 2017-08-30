import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ManageUserComponent } from './manageuser.component';

const routes: Routes = [
    { path: '', component: ManageUserComponent }
];

@NgModule({
    imports: [FormsModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageUserRoutingModule { }
