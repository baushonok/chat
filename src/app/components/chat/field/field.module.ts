import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FieldComponent } from './field.component';

@NgModule({
  declarations: [FieldComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [FieldComponent]
})
export class FieldModule { }
