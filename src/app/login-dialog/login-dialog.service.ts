import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  Observable,
  tap,
  throwError
} from 'rxjs';

import { User } from './user.model';
import { environment } from '../../enviroments/environment';

interface LoginResponseData {
  idToken: string;
  email: string;
  localId: string;
  expiresIn: string;
}

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
    }).pipe(
      catchError(this.handleError),
      tap(resData => {
        const user = new User(
          resData.email,
          resData.localId,
          resData.idToken,
          Date.now() + +resData.expiresIn * 1000
        );

        this.handleAuth(user);
      })
    );
  }

  autoLogin(): void {
    const userData = JSON.parse(localStorage.getItem(USER_DATA_KEY));

    if (!userData) {
      return;
    }

    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      userData._tokenExpirationDate
    )

    if (loadedUser.token) {
      this.user.next(loadedUser);
    } else {
      this.logout();
    }
  }

  logout(): void {
    this.user.next(null);
    localStorage.removeItem(USER_DATA_KEY);
  }

  private handleAuth(user: User): void {
    this.user.next(user);
    localStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';

    switch (errorRes.error.error?.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }

    return throwError(errorMessage);
  }
}
