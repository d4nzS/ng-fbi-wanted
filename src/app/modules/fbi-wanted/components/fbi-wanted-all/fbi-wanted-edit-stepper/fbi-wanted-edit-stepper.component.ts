import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FbiWantedService } from '../../../../../core/fbi-wanted.service';
import { FbiWanted } from '../../../../../../shared/interfaces/fbi-wanted';
import { FBI_WANTED_URLS } from '../../../shared/constants/fbi-wanted-urls';
import { APP_URLS } from '../../../../../../shared/constants/app-urls';

@Component({
  selector: 'app-fbi-wanted-edit-stepper',
  templateUrl: './fbi-wanted-edit-stepper.component.html',
  styleUrls: ['./fbi-wanted-edit-stepper.component.scss']
})
export class FbiWantedEditStepperComponent implements OnInit {
  editForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: FbiWanted,
              private router: Router,
              private editDialogRef: MatDialogRef<FbiWantedEditStepperComponent>,
              private fbiWantedService: FbiWantedService) {
  }

  ngOnInit(): void {
    const { title, height_min, weight } = this.data;

    this.editForm = new FormGroup({
      'name': new FormControl(title, Validators.required),
      'height': new FormControl(height_min, Validators.required),
      'weight': new FormControl(weight, Validators.required)
    });
  }

  onAddToEdit(): void {
    const {
      uid,
      description,
      sex,
      publication,
      images: [image]
    } = this.data;
    const { name, height, weight } = this.editForm.value;

    this.fbiWantedService.postEditingFbiWanted({
      title: name,
      height_min: height,
      weight,
      uid,
      description,
      sex,
      publication,
      images: [image]
    }).subscribe(() => {
      this.editDialogRef.close();
      this.router.navigate(['/', APP_URLS.FBI_WANTED, FBI_WANTED_URLS.EDIT])
    })
  }
}
