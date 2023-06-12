import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FbiWantedRoutingModule } from './fbi-wanted-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FbiWantedComponent } from './fbi-wanted.component';
import { FbiWantedListComponent } from './shared/components/fbi-wanted-list/fbi-wanted-list.component';
import { DefaultValuePipe } from './pipes/default-value.pipe';
import { FbiWantedAllComponent } from './components/fbi-wanted-all/fbi-wanted-all.component';
import { FbiWantedEditComponent } from './components/fbi-wanted-edit/fbi-wanted-edit.component';
import { FbiWantedNavbarComponent } from './components/fbi-wanted-navbar/fbi-wanted-navbar.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FbiWantedComponent,
    FbiWantedListComponent,
    DefaultValuePipe,
    FbiWantedAllComponent,
    FbiWantedEditComponent,
    FbiWantedNavbarComponent
  ],
  imports: [
    MatExpansionModule,
    MatPaginatorModule,
    MatToolbarModule,
    FbiWantedRoutingModule,
    SharedModule,
    MatListModule,
    MatButtonModule,
  ]
})
export class FbiWantedModule {
}
