import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LANGUAGES } from '../../../shared/constants/languages';
import { getLanguageFromStorage, saveLanguageToStorage } from '../../../shared/utils/language-storage';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html'
})
export class LanguageSelectorComponent implements OnInit {
  languages: string[];
  selectedLang = getLanguageFromStorage() ?? LANGUAGES.ENGLISH;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.languages = this.translate.getLangs();
  }

  onChangeLanguage(lang: string): void {
    this.translate.use(lang);
    saveLanguageToStorage(lang);
  }
}
