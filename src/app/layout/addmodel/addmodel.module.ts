import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddModelRoutingModule } from './addmodel-routing.module';
import { AddModelComponent } from './addmodel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddModelRoutingModule
  ],
  declarations: [AddModelComponent]
})
export class AddCompanyModule { }
