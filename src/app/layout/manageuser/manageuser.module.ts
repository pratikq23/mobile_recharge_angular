import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table';


import { ManageUserRoutingModule } from './manageuser-routing.module';
import { ManageUserComponent } from './manageuser.component';
import { UserService } from '../../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ManageUserRoutingModule,
    DataTableModule
  ],
  declarations: [ManageUserComponent],
  providers:[UserService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class manageUserModule { }
