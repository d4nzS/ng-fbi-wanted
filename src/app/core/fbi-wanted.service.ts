import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { FbiWantedResponseData } from '../../shared/interfaces/fbi-wanted-response-data';
import { FbiWanted } from '../../shared/interfaces/fbi-wanted';
import { EditingFbiWantedResponseData } from '../../shared/interfaces/editing-fbi-wanted-response-data';

@Injectable({
  providedIn: 'root'
})
export class FbiWantedService {
  constructor(private http: HttpClient) {
  }

  getFbiWanted(page: number): Observable<FbiWantedResponseData> {
    return this.http.get<FbiWantedResponseData>(
      'https://api.fbi.gov/wanted/v1/list',
      {
        params: new HttpParams().set('page', page)
      }
    );
  }

  getEditingFbiWanted(): Observable<FbiWanted[]> {
    return this.http.get('https://ng-fbi-wanted-default-rtdb.europe-west1.firebasedatabase.app/people.json')
      .pipe(
        map(
          (resData: EditingFbiWantedResponseData) => Object.entries(resData).map(([_, value]) => value)
        )
      );
  }

  postEditingFbiWanted(person: object): Observable<void> {
    return this.http.post<void>(
      'https://ng-fbi-wanted-default-rtdb.europe-west1.firebasedatabase.app/people.json',
      person
    );
  }
}
