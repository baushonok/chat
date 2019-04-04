import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.less']
})
export class AuthComponent {
  public username: string;
  public password: string;
  public errorMessage: string;
  constructor(private auth: AuthService, private router: Router) {
    this.username = '';
    this.password = '';
    this.errorMessage = '';
  }

  public authenticate(form: NgForm): void {
    if (form.invalid) {
      this.errorMessage = 'Invalid form';
      return;
    }
    this.auth.authenticate(this.username, this.password)
      .subscribe(response => {
        if (response.success) {
          this.router.navigateByUrl(environment.baseUrl);
        } else {
          this.errorMessage = 'Authentication failed';
        }
      });
  }
  public inputHandler(): void {
    if (!this.errorMessage.length) {
      return;
    }
    this.errorMessage = '';
  }
}
