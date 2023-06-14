import { ChangeDetectionStrategy, Component } from '@angular/core';

import { APP_URLS } from '../../../../../shared/constants/app-urls';
import { FBI_WANTED_URLS } from '../../shared/constants/fbi-wanted-urls';

@Component({
  selector: 'app-fbi-wanted-navbar',
  templateUrl: './fbi-wanted-navbar.component.html',
  styleUrls: ['./fbi-wanted-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedNavbarComponent {
  fbiWantedLinks = [
    {
      path: ['/', APP_URLS.FBI_WANTED],
      text: 'FbiWanted.AllLink'
    },
    {
      path: ['/', APP_URLS.FBI_WANTED, FBI_WANTED_URLS.EDIT],
      text: 'FbiWanted.EditLink'
    }
  ];
}
