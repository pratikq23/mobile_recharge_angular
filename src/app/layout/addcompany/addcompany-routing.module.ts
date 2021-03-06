import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AddCompanyComponent } from './addcompany.component';

const routes: Routes = [
    { path: '', component: AddCompanyComponent }
];

@NgModule({
    imports: [FormsModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddCompanyRoutingModule { }
