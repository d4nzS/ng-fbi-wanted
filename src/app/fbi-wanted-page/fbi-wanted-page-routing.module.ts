import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FbiWantedPageComponent } from './fbi-wanted-page.component';

const routes: Routes = [
  { path: '', component: FbiWantedPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FbiWantedPageRoutingModule {
}
