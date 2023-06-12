import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FbiWantedComponent } from './fbi-wanted.component';
import { FBI_WANTED_URLS } from './shared/constants/fbi-wanted-urls';
import { FbiWantedAllComponent } from './components/fbi-wanted-all/fbi-wanted-all.component';
import { FbiWantedEditComponent } from './components/fbi-wanted-edit/fbi-wanted-edit.component';

const routes: Routes = [
  {
    path: '',
    component: FbiWantedComponent,
    children: [
      {
        path: FBI_WANTED_URLS.ALL,
        component: FbiWantedAllComponent
      },
      {
        path: FBI_WANTED_URLS.EDIT,
        component: FbiWantedEditComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FbiWantedRoutingModule {
}
