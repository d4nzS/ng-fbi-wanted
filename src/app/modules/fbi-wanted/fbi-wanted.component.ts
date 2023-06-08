import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { FbiWantedService } from '../../core/fbi-wanted.service';
import { FbiWanted } from '../../../shared/interfaces/fbi-wanted';

@Component({
  templateUrl: './fbi-wanted.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedComponent implements OnInit, OnDestroy {
  ITEMS_PER_PAGE = 20;
  pages: number;
  fbiWanted: FbiWanted[] = [];

  private unsubscribe = new Subject<void>();

  constructor(private changeDetectorRef: ChangeDetectorRef,
              private fbiWantedService: FbiWantedService) {
  }

  ngOnInit(): void {
    this.loadPage(0);
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
