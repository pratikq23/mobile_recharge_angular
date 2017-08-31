import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table';

import { MangeColorRoutingModule } from './mangecolor-routing.module';
import { MangeColorComponent } from './mangecolor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MangeColorRoutingModule,
    DataTableModule
  ],
  declarations: [MangeColorComponent]
})
export class MangeColorModule { }
