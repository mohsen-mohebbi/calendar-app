import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalenderService } from '../../../shared/services/calendar.service';

@Component({
  selector: 'app-calender-month-view',
  templateUrl: './calender-month-view.component.html',
  styleUrl: './calender-month-view.component.scss'
})
export class CalenderMonthViewComponent {
  constructor(public dialog: MatDialog , public _CalenderService:CalenderService) {
    this._CalenderService.appointments.forEach((appointment) => {
      this._CalenderService.currentView = this._CalenderService.CalendarView.Month;
      this._CalenderService.generateView(this._CalenderService.currentView, this._CalenderService.viewDate);
      
      appointment.color = this._CalenderService.getRandomColor();
    });
    this._CalenderService.generateView(this._CalenderService.currentView, this._CalenderService.viewDate);
    this._CalenderService.generateTimeSlots();
  }
}
