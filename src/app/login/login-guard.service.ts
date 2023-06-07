import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { map, Observable, take } from 'rxjs';

import { LoginService } from './login.service';
import { APP_URLS } from '../../shared/constants/app-urls';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  constructor(private router: Router,
              private loginService: LoginService) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.loginService.user.pipe(
      take(1),
      map(user => !!user || this.router.createUrlTree([APP_URLS.HOME]))
    );
  }
}
