import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AddModelComponent } from './addmodel.component';

const routes: Routes = [
    { path: '', component: AddModelComponent }
];

@NgModule({
    imports: [FormsModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddModelRoutingModule { }
