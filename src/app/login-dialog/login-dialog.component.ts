import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginDialogService } from './login-dialog.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  errorMessage: string;

  constructor(private loginService: LoginDialogService) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
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
      responseData => {
        this.isLoading = false;
        this.errorMessage = '';
        this.loginForm.reset();
      },
      error => {
        this.isLoading = false;
        this.errorMessage = error;
        this.loginForm.reset();
      }
    );
  }
}
