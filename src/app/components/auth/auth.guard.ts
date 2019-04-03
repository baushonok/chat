import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private auth: AuthService, private router: Router) {}
  public canActivate(): boolean {
    if (this.auth.authenticated) {
      return true;
    }
    this.router.navigateByUrl('/auth');
    return false;
  }
}
