import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FbiWanted } from '../../../../../../shared/interfaces/fbi-wanted';
import { FbiWantedEditStepperComponent } from '../fbi-wanted-edit-stepper/fbi-wanted-edit-stepper.component';
import { FBI_WANTED_URLS } from '../../../shared/constants/fbi-wanted-urls';

@Component({
  selector: 'app-fbi-wanted-list',
  templateUrl: './fbi-wanted-list.component.html',
  styleUrls: ['./fbi-wanted-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedListComponent implements OnInit {
  @Input() items: FbiWanted[];
  @Input() editingItems: FbiWanted[];

  editLink = FBI_WANTED_URLS.EDIT;
  editingIds: Set<string>;

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.editingIds = new Set(this.editingItems.map(editingItem => editingItem.uid));
  }

  checkEditing(item: FbiWanted): boolean {
    return !!this.editingItems.find(editingItem => editingItem.uid === item.uid);
  }

  onOpenEditDialog(person: FbiWanted): void {
    this.dialog.open(FbiWantedEditStepperComponent, { data: person });
  }
}
