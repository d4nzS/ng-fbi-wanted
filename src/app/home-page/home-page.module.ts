import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    MatButtonModule,
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule {
}
