import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {
  MatButtonToggle,
  MatButtonToggleGroup,
} from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppointmentModalComponent } from '../appointment-modal/appointment-modal.component';
import { CalenderWeekViewComponent } from './components/calender-week-view/calender-week-view.component';
import { CalenderMonthViewComponent } from './components/calender-month-view/calender-month-view.component';
import { CalenderDayViewComponent } from './components/calender-day-view/calender-day-view.component';
import { CalenderRoutingModule } from './calendar-routing.module';

@NgModule({
  declarations: [CalendarComponent, CalenderWeekViewComponent,
    CalenderMonthViewComponent,
    CalenderDayViewComponent,],
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatIconModule,
    DragDropModule,
    AppointmentModalComponent,
    CalenderRoutingModule
  ],
})
export class CalendarModule { }