import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ManageCompanyComponent } from './managecompany.component';

const routes: Routes = [
    { path: '', component: ManageCompanyComponent }
];

@NgModule({
    imports: [FormsModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageCompanyRoutingModule { }
