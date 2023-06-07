import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { LoginService } from './login/login.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

import { LANGUAGES } from '../shared/constants/languages';
import { getLanguageFromStorage } from '../shared/utils/language-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.components.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthenticated = false;

  private unsubscribe = new Subject<void>();
  constructor(private translate: TranslateService,
              private changeDetectorRef: ChangeDetectorRef,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.translate.setDefaultLang(LANGUAGES.ENGLISH);
    this.translate.addLangs(Object.values(LANGUAGES));
    this.translate.use(getLanguageFromStorage() ?? LANGUAGES.ENGLISH);

    this.loginService.autoLogin();

    this.loginService.user
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(user => {
        this.changeDetectorRef.markForCheck();

        this.isAuthenticated = !!user;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
