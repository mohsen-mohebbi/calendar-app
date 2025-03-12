import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalenderService } from '../../../shared/services/calendar.service';

@Component({
  selector: 'app-calender-week-view',
  templateUrl: './calender-week-view.component.html',
  styleUrl: './calender-week-view.component.scss'
})
export class CalenderWeekViewComponent {
  constructor(public dialog: MatDialog , public _CalenderService:CalenderService) {
    this._CalenderService.weeks=[];
    this._CalenderService.monthDays=[];
    this._CalenderService.weeks=[];
    this._CalenderService.timeSlots=[];
    
    this._CalenderService.appointments.forEach((appointment) => {
      this._CalenderService.currentView = this._CalenderService.CalendarView.Week;
      appointment.color = this._CalenderService.getRandomColor();
    });
    this._CalenderService.generateView(this._CalenderService.currentView, this._CalenderService.viewDate);
    this._CalenderService.generateTimeSlots();
  }
}
