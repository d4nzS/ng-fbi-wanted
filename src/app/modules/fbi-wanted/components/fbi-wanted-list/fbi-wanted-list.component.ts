import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FbiWanted } from '../../../../../shared/interfaces/fbi-wanted';

@Component({
  selector: 'app-fbi-wanted-list',
  templateUrl: './fbi-wanted-list.component.html',
  styleUrls: ['./fbi-wanted-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedListComponent {
  @Input() items: FbiWanted[];
}
