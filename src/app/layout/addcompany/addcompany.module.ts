import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCompanyRoutingModule } from './addcompany-routing.module';
import { AddCompanyComponent } from './addcompany.component';

@NgModule({
  imports: [
    CommonModule,
    AddCompanyRoutingModule
  ],
  declarations: [AddCompanyComponent]
})
export class AddCompanyModule { }
