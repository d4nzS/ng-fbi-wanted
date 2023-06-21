import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { FbiWantedService } from './fbi-wanted.service';
import { OFFICES_KEY } from '../../shared/utils/offices-storage';

@Injectable()
export class FbiWantedInterceptorService implements HttpInterceptor {
  constructor(private fbiWantedService: FbiWantedService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({ params: req.params.set(OFFICES_KEY, this.fbiWantedService.offices) });

    return next.handle(modifiedReq);
  }
}
