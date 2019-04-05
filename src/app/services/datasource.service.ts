import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import AuthResponse from '../interfaces/auth.response.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatasourceService {
  public authToken: string;
  constructor(private httpClient: HttpClient) {
    this.authToken = null;
  }
  public authenticate(name: string, password: string): Observable<boolean> {
    return this.httpClient.post<AuthResponse>(`${environment.authUrl}`, { name, password })
      .pipe(
        map(response => {
          this.authToken = response.token ? response.token : null;
          return response.success;
        })
    );
  }
}
