import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FbiWantedResponseData } from '../../shared/interfaces/fbi-wanted-response-data';

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
}
