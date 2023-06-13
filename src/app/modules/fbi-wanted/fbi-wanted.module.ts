import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FbiWantedRoutingModule } from './fbi-wanted-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FbiWantedComponent } from './fbi-wanted.component';
import { FbiWantedListComponent } from './shared/components/fbi-wanted-list/fbi-wanted-list.component';
import { DefaultValuePipe } from './pipes/default-value.pipe';
import { FbiWantedAllComponent } from './components/fbi-wanted-all/fbi-wanted-all.component';
import { FbiWantedEditComponent } from './components/fbi-wanted-edit/fbi-wanted-edit.component';
import { FbiWantedNavbarComponent } from './components/fbi-wanted-navbar/fbi-wanted-navbar.component';
import { FbiWantedEditStepperComponent } from './components/fbi-wanted-all/fbi-wanted-edit-stepper/fbi-wanted-edit-stepper.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    FbiWantedComponent,
    FbiWantedListComponent,
    DefaultValuePipe,
    FbiWantedAllComponent,
    FbiWantedEditComponent,
    FbiWantedNavbarComponent,
    FbiWantedEditStepperComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    FbiWantedRoutingModule,
    SharedModule,
    MatDialogModule,
  ]
})
export class FbiWantedModule {
}
