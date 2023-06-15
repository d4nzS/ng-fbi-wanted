import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { FbiWantedService } from '../../../../../core/fbi-wanted.service';
import { FbiWanted } from '../../../../../../shared/interfaces/fbi-wanted';
import { FBI_WANTED_URLS } from '../../../shared/constants/fbi-wanted-urls';
import { APP_URLS } from '../../../../../../shared/constants/app-urls';

type ControlType = 'text' | 'number' | 'radio' | 'date';

interface AdditionalControl {
  name: string;
  type: ControlType,
  control: FormControl
}

@Component({
  selector: 'app-fbi-wanted-edit-stepper',
  templateUrl: './fbi-wanted-edit-stepper.component.html',
  styleUrls: ['./fbi-wanted-edit-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FbiWantedEditStepperComponent implements OnInit {
  faPlus = faPlus;
  forbiddenAdditionalControlNames = ['title', 'height_min', 'weight', 'uid', 'description', 'sex', 'publication', 'images']
  additionalControlTypes = [
    { value: 'text', text: 'String' },
    { value: 'number', text: 'Number' },
    { value: 'radio', text: 'Boolean' },
    { value: 'date', text: 'Date' }
  ];
  additionalControls: AdditionalControl[] = [];
  editForm: FormGroup;
  addCustomControlForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: FbiWanted,
              private router: Router,
              private editDialogRef: MatDialogRef<FbiWantedEditStepperComponent>,
              private fbiWantedService: FbiWantedService) {
  }

  ngOnInit(): void {
    const { title, sex, height_min, weight } = this.data;

    this.editForm = new FormGroup({
      'name': new FormControl(title, Validators.required),
      'sex': new FormControl(sex, Validators.required),
      'height': new FormControl(height_min, Validators.required),
      'weight': new FormControl(weight, Validators.required),
      'additionalInfo': new FormGroup({})
    });

    this.addCustomControlForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.forbiddenNamesValidator.bind(this)]),
      'type': new FormControl(null, Validators.required)
    });
  }

  onAddCustomControl(): void {
    if (this.addCustomControlForm.invalid) {
      return;
    }

    const { name, type } = this.addCustomControlForm.value;

    const newControl = new FormControl(null, Validators.required);

    (<FormGroup>this.editForm.controls['additionalInfo']).addControl(name, newControl);
    this.additionalControls.push({
      name,
      type,
      control: newControl
    });
    this.forbiddenAdditionalControlNames.push(name);

    this.addCustomControlForm.reset();
  }

  onAddToEdit(): void {
    if (this.editForm.invalid) {
      return;
    }

    const { uid, description, publication, images: [image] } = this.data;
    const { name, sex, height, weight, additionalInfo } = this.editForm.value;

    this.fbiWantedService.postEditingFbiWanted({
      title: name,
      height_min: height,
      weight,
      uid,
      description,
      sex,
      publication,
      additionalInfo,
      images: [image]
    }).subscribe(() => {
      this.editDialogRef.close();
      this.router.navigate(['/', APP_URLS.FBI_WANTED, FBI_WANTED_URLS.EDIT])
    });
  }

  forbiddenNamesValidator(control: FormControl): { [key: string]: true } | null {
    return this.forbiddenAdditionalControlNames.includes(control.value)
      ? { nameIsForbidden: true }
      : null;
  }
}
