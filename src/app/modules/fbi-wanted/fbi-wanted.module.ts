import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';

import { FbiWantedRoutingModule } from './fbi-wanted-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FbiWantedComponent } from './fbi-wanted.component';
import { FbiWantedListComponent } from './components/fbi-wanted-list/fbi-wanted-list.component';
import { DefaultValuePipe } from './pipes/default-value.pipe';

@NgModule({
  declarations: [
    FbiWantedComponent,
    FbiWantedListComponent,
    DefaultValuePipe
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
