import { ChangeDetectionStrategy, Component } from '@angular/core';

import { APP_URLS } from '../../shared/constants/app-urls';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  homeUrl = `/${APP_URLS.HOME}`;
  fbiWantedUrl = `/${APP_URLS.FBI_WANTED}`;
  settingsUrl = `/${APP_URLS.SETTINGS}`;
}
