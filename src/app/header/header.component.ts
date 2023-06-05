import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { LoginDialogService } from '../login-dialog/login-dialog.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userEmail: string;
  userSub: Subscription;

  constructor(private loginService: LoginDialogService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userSub = this.loginService.user.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.userEmail = user.email;
      } else {
        this.isAuthenticated = false;
      }
    });
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
