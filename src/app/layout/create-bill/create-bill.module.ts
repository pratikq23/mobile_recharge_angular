import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CreateBillRoutingModule } from './create-bill-routing.module';
import { CreateBillComponent } from './create-bill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CreateBillRoutingModule
  ],
  declarations: [CreateBillComponent]
})
export class CreateBillModule { }
