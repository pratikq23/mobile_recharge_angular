import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCompanyRoutingModule } from './addcompany-routing.module';
import { AddCompanyComponent } from './addcompany.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddCompanyRoutingModule
  ],
  declarations: [AddCompanyComponent]
})
export class AddCompanyModule { }
