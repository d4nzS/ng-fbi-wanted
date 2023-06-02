import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginDialogComponent } from './login-dialog/login-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private dialog: MatDialog) {
  }

  onOpenLoginDialog(): void {
    this.dialog.open(LoginDialogComponent);
  }
}
