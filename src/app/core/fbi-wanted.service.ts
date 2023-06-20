import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { FbiWantedResponseData } from '../../shared/interfaces/fbi-wanted-response-data';
import { EditingFbiWantedResponseData } from '../../shared/interfaces/editing-fbi-wanted-response-data';
import { EditingFbiWanted } from '../../shared/interfaces/editing-fbi-wanted';
import { getOfficesFromStorage, saveOfficesToStorage } from '../../shared/utils/offices-storage';
import { IS_CACHE_ENABLED } from './cache-interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class FbiWantedService {
  offices = getOfficesFromStorage() ?? '';

  constructor(private http: HttpClient) {
  }


  getFbiWanted(page: number): Observable<FbiWantedResponseData> {
    return this.http.get<FbiWantedResponseData>(
      'https://api.fbi.gov/wanted/v1/list',
      {
        context: new HttpContext().set(IS_CACHE_ENABLED, true),
        params: new HttpParams().set('page', page)
      }
    );
  }

  getEditingFbiWanted(): Observable<EditingFbiWanted[]> {
    return this.http.get<EditingFbiWantedResponseData>('https://ng-fbi-wanted-default-rtdb.europe-west1.firebasedatabase.app/people.json')
      .pipe(
        map(
          (resData: EditingFbiWantedResponseData) => Object.entries(resData).map(([_, value]) => value)
        )
      );
  }

  postEditingFbiWanted(editingFbiWanted: EditingFbiWanted): Observable<void> {
    return this.http.post<void>(
      'https://ng-fbi-wanted-default-rtdb.europe-west1.firebasedatabase.app/people.json',
      editingFbiWanted
    );
  }

  changeOffices(newOffices: string): void {
    this.offices = newOffices;
    saveOfficesToStorage(newOffices);
  }
}
