import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

interface LoginResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginDialogService {
  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<LoginResponseData> {
    return this.http.post<LoginResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB3Eyc8bRTklhlB6wCSXtYMET1A5XHP7CE', {
      email,
      password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(errorRes: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';

    switch (errorRes.error.error?.message) {
      case 'INVALID_EMAIL':
        errorMessage = 'This email does not exist.';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }

    return throwError(errorMessage);
  }
}
