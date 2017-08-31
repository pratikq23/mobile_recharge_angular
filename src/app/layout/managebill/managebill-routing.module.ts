import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MangeColorComponent } from './mangecolor.component';

const routes: Routes = [
    { path: '', component: MangeColorComponent }
];

@NgModule({
    imports: [FormsModule,RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MangeColorRoutingModule { }
