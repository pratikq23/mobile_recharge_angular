import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ManageModelComponent } from './managemodel.component';

const routes: Routes = [
    { path: '', component: ManageModelComponent }
];

@NgModule({
    imports: [FormsModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageModelRoutingModule { }
