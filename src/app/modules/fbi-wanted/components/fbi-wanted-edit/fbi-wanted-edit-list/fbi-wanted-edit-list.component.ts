import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FbiWanted } from '../../../../../../shared/interfaces/fbi-wanted';

@Component({
  selector: 'app-fbi-wanted-edit-list',
  templateUrl: './fbi-wanted-edit-list.component.html',
  styleUrls: ['./fbi-wanted-edit-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedEditListComponent {
  @Input() items: FbiWanted[];
  @Input() selectedId: string;
}
