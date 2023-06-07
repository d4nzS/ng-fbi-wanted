const LANGUAGE_KEY = 'lang';

export function getLanguageFromStorage(): string | null {
  return localStorage.getItem(LANGUAGE_KEY);
}

export function saveLanguageToStorage(language: string): void {
  localStorage.setItem(LANGUAGE_KEY, language);
}
