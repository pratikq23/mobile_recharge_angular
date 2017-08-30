import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table';

import { ManageUserRoutingModule } from './manageuser-routing.module';
import { ManageUserComponent } from './manageuser.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ManageUserRoutingModule,
    DataTableModule
  ],
  declarations: [ManageUserComponent]
})
export class manageUserModule { }
