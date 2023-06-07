import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { LoginDialogService } from './login-dialog.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage: string;

  constructor(private loginDialogRef: MatDialogRef<LoginDialogComponent>,
              private loginService: LoginDialogService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    this.isLoading = true

    this.loginService.login(email, password).subscribe(
      resData => {
        this.loginService.handleAuth({
          email: resData.email,
          id: resData.localId,
          token: resData.idToken,
          tokenExpirationDate: Date.now() + +resData.expiresIn * 1000
        });
        this.loginDialogRef.close();
      },
      error => {
        this.isLoading = false;
        this.errorMessage = error;
        this.loginForm.reset();
      }
    );
  }
}
