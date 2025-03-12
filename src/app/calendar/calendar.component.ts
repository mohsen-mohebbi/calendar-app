import { Component } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AppointmentModalComponent } from '../appointment-modal/appointment-modal.component';
import { Appointment } from '../shared/models/appointment.model';
import { CalenderService } from '../shared/services/calendar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {

  constructor(public dialog: MatDialog ,
    private router: Router,
    public _CalenderService:CalenderService) {
    this._CalenderService.appointments.forEach((appointment) => {
      appointment.color = this._CalenderService.getRandomColor();
    });
    this._CalenderService.generateView(this._CalenderService.currentView, this._CalenderService.viewDate);
    this._CalenderService.generateTimeSlots();
  }



  isSelected(date: Date): boolean {
    if (!this._CalenderService.selectedDate) {
      return false;
    }
    return (
      date.getDate() === this._CalenderService.selectedDate.getDate() &&
      date.getMonth() === this._CalenderService.selectedDate.getMonth() &&
      date.getFullYear() === this._CalenderService.selectedDate.getFullYear()
    );
  }


  deleteAppointment(appointment: Appointment, event: Event) {
    event.stopPropagation();
    const index = this._CalenderService.appointments.indexOf(appointment);
    if (index > -1) {
      this._CalenderService.appointments.splice(index, 1);
    }
  }


  isActive(path: string): boolean {
    return this.router.url === path;
  }
}