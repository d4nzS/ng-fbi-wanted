import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

import { LoginDialogService } from '../login-dialog/login-dialog.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  userEmail: string;

  private unsubscribe = new Subject<void>();

  constructor(private loginService: LoginDialogService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loginService.user
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(user => {
        if (user) {
          this.isAuthenticated = true;
          this.userEmail = user.email;
        } else {
          this.isAuthenticated = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onOpenLoginDialog(): void {
    this.dialog.open(LoginDialogComponent);
  }

  onLogout(): void {
    this.loginService.logout();
  }
}
