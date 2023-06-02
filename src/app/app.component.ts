import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LoginDialogService } from './login-dialog/login-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userSub: Subscription;

  constructor(private dialog: MatDialog,
              private loginService: LoginDialogService) {
  }

  ngOnInit(): void {
    this.loginService.autoLogin();
    this.userSub = this.loginService.user.subscribe(user => this.isAuthenticated = !!user);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onOpenLoginDialog(): void {
    this.dialog.open(LoginDialogComponent);
  }

  onLogout(): void {
    this.loginService.logout();
  }
}
