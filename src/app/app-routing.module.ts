import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { APP_URLS } from '../shared/constants/app-urls';

const routes: Routes = [
  {
    path: APP_URLS.HOME,
    loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: APP_URLS.FBI_WANTED,
    loadChildren: () => import('./fbi-wanted-page/fbi-wanted-page.module').then(m => m.FbiWantedPageModule)
  },
  {
    path: APP_URLS.SETTINGS,
    loadChildren: () => import('./settings-page/settings-page.module').then(m => m.SettingsPageModule)
  },
  {
    path: '**',
    redirectTo: APP_URLS.HOME
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
