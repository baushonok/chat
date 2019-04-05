import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DatasourceService } from '../../services/datasource.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private datasource: DatasourceService) { }
  public authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }
  public get authenticated(): boolean {
    return this.datasource.authToken !== null;
  }
  public clear(): void {
    this.datasource.authToken = null;
  }
}
