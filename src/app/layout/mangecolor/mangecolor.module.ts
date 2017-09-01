import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
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
  declarations: [MangeColorComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MangeColorModule { }
