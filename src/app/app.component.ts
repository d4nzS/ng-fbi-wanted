import { Component, OnInit } from '@angular/core';
import { LoginDialogService } from './login-dialog/login-dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private loginService: LoginDialogService) {
  }

  ngOnInit(): void {
    this.loginService.autoLogin();
  }
}
