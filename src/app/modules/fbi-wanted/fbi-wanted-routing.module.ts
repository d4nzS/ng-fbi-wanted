import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FbiWantedComponent } from './fbi-wanted.component';
import { FbiWantedAllComponent } from './components/fbi-wanted-all/fbi-wanted-all.component';

const routes: Routes = [
  {
    path: '',
    component: FbiWantedComponent,
    children: [
      {
        path: '',
        component: FbiWantedAllComponent
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
