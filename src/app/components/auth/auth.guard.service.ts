import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
  constructor(private auth: AuthService, private router: Router) {}
  public canActivate(): boolean {
    if (!this.auth.authenticated) {
      this.router.navigateByUrl(environment.authUrl);
      return false;
    }
    return true;
  }
}
