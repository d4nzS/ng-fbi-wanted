import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FbiWanted } from '../../../../../../shared/interfaces/fbi-wanted';
import { MatDialog } from '@angular/material/dialog';
import { FbiWantedEditStepperComponent } from '../../../components/fbi-wanted-all/fbi-wanted-edit-stepper/fbi-wanted-edit-stepper.component';

@Component({
  selector: 'app-fbi-wanted-list',
  templateUrl: './fbi-wanted-list.component.html',
  styleUrls: ['./fbi-wanted-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedListComponent {
  @Input() items: FbiWanted[];

  constructor(private dialog: MatDialog) {
  }

  onOpenEditDialog(event: MouseEvent): void {
    event.stopPropagation(); // я подумаю
    this.dialog.open(FbiWantedEditStepperComponent);
  }
}
