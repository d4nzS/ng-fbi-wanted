import { ChangeDetectionStrategy, Component } from '@angular/core';

import { APP_URLS } from '../../../shared/constants/app-urls';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  appLinks = [
    {
      path: APP_URLS.HOME,
      text: 'Sidebar.HomeLink'
    },
    {
      path: APP_URLS.FBI_WANTED,
      text: 'FBI Wanted'
    },
    {
      path: APP_URLS.SETTINGS,
      text: 'Sidebar.SettingsLink'
    }
  ];
}
