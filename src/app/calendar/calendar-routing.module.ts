import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderDayViewComponent } from './components/calender-day-view/calender-day-view.component';
import { CalenderMonthViewComponent } from './components/calender-month-view/calender-month-view.component';
import { CalenderWeekViewComponent } from './components/calender-week-view/calender-week-view.component';
import { CalendarComponent } from './calendar.component';

export const routes: Routes = [
  {
    path: '', 
    component: CalendarComponent,
    children: [
      { path: 'calenderday', component: CalenderDayViewComponent },
      { path: 'calendermonth', component: CalenderMonthViewComponent },
      { path: 'calenderweek', component: CalenderWeekViewComponent },
      { path: '', redirectTo: '/calendar/calendermonth', pathMatch: 'full' },  // ریدایرکت به ماه
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalenderRoutingModule { }
