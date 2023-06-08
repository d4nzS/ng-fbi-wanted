import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MatButtonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule {
}
