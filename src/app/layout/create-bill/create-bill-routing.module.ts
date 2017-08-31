import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CreateBillComponent } from './create-bill.component';

const routes: Routes = [
    { path: '', component: CreateBillComponent }
];

@NgModule({
    imports: [FormsModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CreateBillRoutingModule { }
