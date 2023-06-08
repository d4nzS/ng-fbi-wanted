import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FbiWantedRoutingModule } from './fbi-wanted-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FbiWantedComponent } from './fbi-wanted.component';
import { FbiWantedListComponent } from './fbi-wanted-list/fbi-wanted-list.component';

@NgModule({
  declarations: [
    FbiWantedComponent,
    FbiWantedListComponent
  ],
  imports: [
    MatExpansionModule,
    MatPaginatorModule,
    FbiWantedRoutingModule,
    SharedModule,
  ]
})
export class FbiWantedModule {
}
