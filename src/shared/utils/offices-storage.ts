const OFFICES_KEY = 'field_offices';

export function getOfficesFromStorage(): string | null {
  return localStorage.getItem(OFFICES_KEY);
}

export function saveOfficesToStorage(offices: string): void {
  localStorage.setItem(OFFICES_KEY, offices);
}
