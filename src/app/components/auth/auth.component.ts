import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;
  constructor() { }

  public authenticate(form: NgForm): void {
    if (form.invalid) {
      this.errorMessage = 'Invalid form';
      return;
    }
  }
  public inputHandler(): void {
    if (!this.errorMessage.length) {
      return;
    }
    this.errorMessage = '';
  }
}
