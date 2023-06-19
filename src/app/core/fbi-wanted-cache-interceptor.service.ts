import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

interface CachedResponse {
  expiresIn: number;
  response: HttpResponse<any>;
}

@Injectable()
export class FbiWantedCacheInterceptorService implements HttpInterceptor {
  private cache = new Map<string, CachedResponse>();
  private cacheDurationInMilliseconds = 3_600_000;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET' || !req.url.includes('api.fbi.gov')) {
      return next.handle(req);
    }

    const cachedRes = this.cache.get(req.urlWithParams);

    if (cachedRes && this.isCacheValid(cachedRes.expiresIn)) {
      return of(cachedRes.response.clone());
    }

    return next.handle(req)
      .pipe(tap(event => {
        if (event.type === HttpEventType.Response) {
          this.cache.set(req.urlWithParams, {
            expiresIn: Date.now() + this.cacheDurationInMilliseconds,
            response: event.clone()
          });
        }
      }));
  }

  private isCacheValid(timestamp: number): boolean {
    return Date.now() < timestamp;
  }
}
