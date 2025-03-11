import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
})
export class AppointmentModalComponent {
  appointmentFormGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AppointmentModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public modalData: {
      uuid: string;
      date: Date;
      title: string;
      startTime: string;
      endTime: string;
    },
    private formBuilder: FormBuilder
  ) {
    this.appointmentFormGroup = this.formBuilder.group(
      {
        title: [this.modalData.title || '', Validators.required],
        date: [this.modalData.date, Validators.required],
        startTime: [this.modalData.startTime || '', Validators.required],
        endTime: [this.modalData.endTime || '', Validators.required],
      },
      { validators: this.timeRangeValidator }
    );
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.appointmentFormGroup.valid) {
      const formData = {
        title: this.appointmentFormGroup.controls['title'].value,
        date: this.appointmentFormGroup.controls['date'].value,
        startTime: this.appointmentFormGroup.controls['startTime'].value,
        endTime: this.appointmentFormGroup.controls['endTime'].value,
        uuid: this.modalData.uuid,
      };
      this.dialogRef.close(formData);
    }
  }

  onDelete(): void {
    this.dialogRef.close({ remove: true, uuid: this.modalData.uuid });
  }

  timeRangeValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
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
