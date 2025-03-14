import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private formBuilder: FormBuilder) {}

  createAppointmentForm(data: any): FormGroup {
    return this.formBuilder.group(
      {
        title: [data?.title || '', Validators.required],
        date: [data?.date, Validators.required],
        startTime: [data?.startTime || '', Validators.required],
        endTime: [data?.endTime || '', Validators.required],
      },
      { validators: this.timeRangeValidator }
    );
  }

  timeRangeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const startTime = control.get('startTime')?.value;
    const endTime = control.get('endTime')?.value;
    if (startTime && endTime) {
      const [startHours, startMinutes] = startTime.split(':');
      const [endHours, endMinutes] = endTime.split(':');

      const startDate = new Date();
      startDate.setHours(startHours);
      startDate.setMinutes(startMinutes);

      const endDate = new Date();
      endDate.setHours(endHours);
      endDate.setMinutes(endMinutes);

      if (startDate > endDate) {
        return { timeError: true };
      }
    }
    return null;
  };
}
