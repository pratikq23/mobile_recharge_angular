import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table';

import { ManageModelRoutingModule } from './managemodel-routing.module';
import { ManageModelComponent } from './managemodel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ManageModelRoutingModule,
    DataTableModule
  ],
  declarations: [ManageModelComponent]
})
export class ManageModelModule { }
