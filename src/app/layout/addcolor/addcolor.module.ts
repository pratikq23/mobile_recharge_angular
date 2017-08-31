import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddColorRoutingModule } from './addcolor-routing.module';
import { AddColorComponent } from './addcolor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AddColorRoutingModule
  ],
  declarations: [AddColorComponent]
})
export class AddColorModule { }
