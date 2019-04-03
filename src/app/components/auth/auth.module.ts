import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthGuard
  ]
})
export class AuthModule { }
