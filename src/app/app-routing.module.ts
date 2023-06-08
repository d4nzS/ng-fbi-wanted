import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { APP_URLS } from '../shared/constants/app-urls';
import { LoginGuardService } from './login/login-guard.service';

const routes: Routes = [
  {
    path: APP_URLS.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: APP_URLS.FBI_WANTED,
    loadChildren: () => import('./fbi-wanted/fbi-wanted.module').then(m => m.FbiWantedModule),
    canActivate: [LoginGuardService]
  },
  {
    path: APP_URLS.SETTINGS,
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
    canActivate: [LoginGuardService]
  },
  {
    path: '**',
    redirectTo: APP_URLS.HOME
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
