import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fbi-wanted-sex-control',
  templateUrl: './fbi-wanted-sex-control.component.html',
  styleUrls: ['./fbi-wanted-sex-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FbiWantedSexControlComponent),
      multi: true
    }
  ]
})
export class FbiWantedSexControlComponent implements ControlValueAccessor {
  faMale = faMale;
  faFemale = faFemale;
  radioButtonsInfo = [
    { value: 'Male', icon: faMale },
    { value: 'Female', icon: faFemale }
  ];
  innerValue: string;

  onChange: Function;

  onTouched: Function;

  writeValue(value: string): void {
    this.innerValue = value;
  }

  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onTouched = fn;
  }

  change(value): void {
    this.innerValue = value;
    this.onChange(value);
    this.onTouched(value);
  }
}
