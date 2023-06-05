import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  Observable,
  throwError
} from 'rxjs';

import { LoginResponseData } from '../../shared/interfaces/login-response-data';
import { User } from '../../shared/interfaces/user';
import { environment } from '../../enviroments/environment';
import { AUTH_ERROR_MESSAGES } from '../../shared/constants/auth-error-messages';

const USER_DATA_KEY = 'udk';

@Injectable({
  providedIn: 'root'
})
export class LoginDialogService {
  public user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<LoginResponseData> {
    return this.http.post<LoginResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`, {
      email,
      password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError));
  }

  autoLogin(): void {
    const loadedUser = JSON.parse(localStorage.getItem(USER_DATA_KEY));

    if (!loadedUser) {
      return;
    }

    if (!loadedUser.tokenExpirationDate || Date.now() > loadedUser.tokenExpirationDate) {
      this.logout();
    } else {
      this.user.next(loadedUser)
    }
  }

  logout(): void {
    this.user.next(null);
    localStorage.removeItem(USER_DATA_KEY);
  }

  handleAuth(user: User): void {
    this.user.next(user);
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse): Observable<never> {
    return throwError(AUTH_ERROR_MESSAGES[errorRes.error.error?.message] ?? AUTH_ERROR_MESSAGES.UNKNOWN_ERROR);
  }
}
