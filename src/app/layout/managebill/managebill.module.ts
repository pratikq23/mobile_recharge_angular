import { NgModule ,NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table';

import { MangeBillRoutingModule } from './managebill-routing.module';
import { ManageBillComponent } from './managebill.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MangeBillRoutingModule,
    DataTableModule
  ],
  declarations: [ManageBillComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MangeBillModule { }
