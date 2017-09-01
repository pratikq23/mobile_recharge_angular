import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


import { CreateBillRoutingModule } from './create-bill-routing.module';
import { CreateBillComponent } from './create-bill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateBillRoutingModule
  ],
  declarations: [CreateBillComponent]
})
export class CreateBillModule { }
