import { NgModule } from '@angular/core';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    SettingRoutingModule
  ]
})
export class SettingsModule {
}
