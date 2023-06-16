import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';

import { EditingFbiWanted } from '../../../../../../shared/interfaces/editing-fbi-wanted';

@Component({
  selector: 'app-fbi-wanted-edit-list',
  templateUrl: './fbi-wanted-edit-list.component.html',
  styleUrls: ['./fbi-wanted-edit-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedEditListComponent {
  @Input() items: EditingFbiWanted[];
  @Input() selectedId: string;
}
