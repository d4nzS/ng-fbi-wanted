import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

import { LoginService } from '../../core/login.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() switchSidebarVisibility = new EventEmitter<void>();

  isAuthenticated = false;
  userEmail: string;

  private unsubscribe = new Subject<void>();

  constructor(private loginService: LoginService,
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
    this.dialog.open(LoginComponent);
  }

  onLogout(): void {
    this.loginService.logout();
  }

  onSwitchSidebarVisibility(): void {
    console.log('click')

    this.switchSidebarVisibility.next();
  }
}
