import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table';

import { ManageCompanyRoutingModule } from './managecompany-routing.module';
import { ManageCompanyComponent } from './managecompany.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ManageCompanyRoutingModule,
    DataTableModule
  ],
  declarations: [ManageCompanyComponent]
})
export class ManageCompanyModule { }
