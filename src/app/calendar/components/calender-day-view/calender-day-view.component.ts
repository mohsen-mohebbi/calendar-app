import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalenderService } from '../../../shared/services/calendar.service';
@Component({
  selector: 'app-calender-day-view',
  templateUrl: './calender-day-view.component.html',
  styleUrl: './calender-day-view.component.scss'
})
export class CalenderDayViewComponent {
  constructor(public dialog: MatDialog , public _CalenderService:CalenderService) {
    this._CalenderService.weeks=[];
    this._CalenderService.monthDays=[];
    this._CalenderService.weeks=[];
    this._CalenderService.timeSlots=[];
    this._CalenderService.appointments.forEach((appointment) => {
      this._CalenderService.currentView = this._CalenderService.CalendarView.Day;
      appointment.color = this._CalenderService.getRandomColor();
    });
    this._CalenderService.generateView(this._CalenderService.currentView, this._CalenderService.viewDate);
    this._CalenderService.generateTimeSlots();
  }
}
