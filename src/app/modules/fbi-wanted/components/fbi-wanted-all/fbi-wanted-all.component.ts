import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { FbiWanted } from '../../../../../shared/interfaces/fbi-wanted';
import { FbiWantedService } from '../../../../core/fbi-wanted.service';

@Component({
  selector: 'app-fbi-wanted-all',
  templateUrl: './fbi-wanted-all.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedAllComponent implements OnInit, OnDestroy {
  ITEMS_PER_PAGE = 20;
  pages: number;
  fbiWanted: FbiWanted[] = [];
  editingFbiWanted = [];

  private unsubscribe = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private fbiWantedService: FbiWantedService) {
  }

  ngOnInit(): void {
    this.loadPage(0);
    this.fbiWantedService.getEditingFbiWanted()
      .subscribe(resData => {
        this.changeDetectorRef.markForCheck();
        this.editingFbiWanted = resData;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onPageChanged(event: { pageIndex: number }): void {
    this.loadPage(event.pageIndex);
  }

  private loadPage(index): void {
    this.fbiWantedService.getFbiWanted(index + 1)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        resData => {
          this.changeDetectorRef.markForCheck();
          this.pages = resData.total;
          this.fbiWanted = resData.items;
        },
        error => alert(error.message)
      );
  }
}
