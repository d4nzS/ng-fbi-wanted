import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

import { FbiWanted } from '../../../../../shared/interfaces/fbi-wanted';
import { FbiWantedService } from '../../../../core/fbi-wanted.service';

@Component({
  selector: 'app-fbi-wanted-edit',
  templateUrl: './fbi-wanted-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedEditComponent implements OnInit, OnDestroy {
  editingFbiWanted: FbiWanted[] = [];
  selectedPersonId: string;

  private unsubscribe = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute,
              private fbiWantedService: FbiWantedService) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.selectedPersonId = params['selected']);

    this.fbiWantedService.getEditingFbiWanted()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(resData => {
        this.changeDetectorRef.markForCheck();
        this.editingFbiWanted = resData;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
