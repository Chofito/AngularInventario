import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import moment, { Moment } from 'moment';

import { API_LOCAL_URL, API_AZURE_URL, IS_LOCAL_MODE } from '../../settings';
import UserInfo from '../models/userInfo';
import UserToken from '../models/userToken';

@Injectable({
  providedIn: 'root',
})
export default class UserService {
  private url: string;

  constructor(private httpClient: HttpClient) {
    this.url = IS_LOCAL_MODE ? API_LOCAL_URL : API_AZURE_URL;
  }

  registerUser(user: UserInfo): Observable<UserToken> {
    return this.httpClient
      .post<UserToken>(`${this.url}cuentas/crear`, user)
      .pipe(tap(res => this.setSession(res), shareReplay()));
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  isLoggedIn = (): boolean => moment().isBefore(this.getExpiration());

  isLoggedOut = (): boolean => !this.isLoggedIn();

  getExpiration(): Moment {
    const expiration = localStorage.getItem('expiration') || 'null';
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  private setSession(data: UserToken): void {
    const expiresAt = moment().add(data.expiration, 'seconds');
    localStorage.setItem('token', data.token);
    localStorage.setItem('expiration', JSON.stringify(expiresAt.valueOf()));
  }
}
