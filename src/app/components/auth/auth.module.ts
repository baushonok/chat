import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth.guard.service';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class AuthModule { }
