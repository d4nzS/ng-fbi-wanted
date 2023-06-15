import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from '@angular/core';

import { FbiWanted } from '../../../../../../shared/interfaces/fbi-wanted';
import { EditingFbiWanted } from '../../../../../../shared/interfaces/editing-fbi-wanted';

interface EditingFbiWantedWithAdditionalInfoInTuple extends FbiWanted {
  additionalInfo: [name: string, text: string][]
}

@Component({
  selector: 'app-fbi-wanted-edit-list',
  templateUrl: './fbi-wanted-edit-list.component.html',
  styleUrls: ['./fbi-wanted-edit-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedEditListComponent implements OnInit {
  @Input() items: EditingFbiWanted[];
  @Input() selectedId: string;

  itemsWithAdditionalInfoInTuple: EditingFbiWantedWithAdditionalInfoInTuple[] = [];

  ngOnInit(): void {
    this.itemsWithAdditionalInfoInTuple = this.items.map(item => ({
      ...item,
      additionalInfo: item.additionalInfo
        ? Object.entries(item.additionalInfo)
        : undefined
    }));
  }
}
