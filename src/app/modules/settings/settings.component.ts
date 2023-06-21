import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { FbiWantedService } from '../../core/fbi-wanted.service';

@Component({
  templateUrl: './settings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {
  offices: string;

  constructor(private fbiWantedService: FbiWantedService) {
  }

  ngOnInit(): void {
    this.offices = this.fbiWantedService.offices;
  }

  onChangeOffices(): void {
    this.fbiWantedService.changeOffices(this.offices);
  }
}
