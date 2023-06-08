import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FbiWantedComponent } from './fbi-wanted.component';

const routes: Routes = [
  { path: '', component: FbiWantedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FbiWantedRoutingModule {
}
