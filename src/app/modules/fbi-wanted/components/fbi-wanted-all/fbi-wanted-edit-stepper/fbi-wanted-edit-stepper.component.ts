import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-fbi-wanted-edit-stepper',
  templateUrl: './fbi-wanted-edit-stepper.component.html',
  styleUrls: ['./fbi-wanted-edit-stepper.component.scss']
})
export class FbiWantedEditStepperComponent implements OnInit {
  editForm: FormGroup;

  constructor(private editDialogRef: MatDialogRef<FbiWantedEditStepperComponent>) {
  }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'height': new FormControl(null, Validators.required),
      'weight': new FormControl(null, Validators.required)
    });
  }
}
