import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { LoginService } from '../login/login.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  isAuthenticated = false;

  private unsubscribe = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private loginService: LoginService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loginService.user
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(user => {
        this.changeDetectorRef.markForCheck();

        this.isAuthenticated = !!user;
      });
  }

  onOpenLoginDialog(): void {
    this.dialog.open(LoginComponent);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
