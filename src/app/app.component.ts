import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
import { TranslateService } from '@ngx-translate/core';

import { LANGUAGES } from '../shared/constants/languages';
import { getLanguageFromStorage } from '../shared/utils/language-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService,
              private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.translate.setDefaultLang(LANGUAGES.ENGLISH);
    this.translate.addLangs(Object.values(LANGUAGES));
    this.translate.use(getLanguageFromStorage() ?? LANGUAGES.ENGLISH);

    this.loginService.autoLogin();
  }
}
