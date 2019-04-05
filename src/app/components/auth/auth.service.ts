import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

import { DatasourceService } from '../../services/datasource.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private datasource: DatasourceService,
              private jwtHelper: JwtHelperService,
              private router: Router) { }
  public authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }
  public get authenticated(): boolean {
    const token = this.jwtHelper.tokenGetter();
    return !this.jwtHelper.isTokenExpired();
  }
  public clear(): void {
    localStorage.removeItem('token');
  }
}
