import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { CalendarView } from '../enums/calendarView';
import { AppointmentModalComponent } from '../../appointment-modal/appointment-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
@Injectable({
  providedIn: 'root'
})
export class CalenderService {
  constructor(public dialog: MatDialog) {

  }
  public CalendarView = CalendarView;
  viewDate: Date = new Date();
  selectedDate: Date | null = null;
  selectedStartTime: string | undefined;
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthDays: Date[] = [];


  currentView: CalendarView = CalendarView.Month;
  timeSlots: string[] = [];

  weeks: Date[][] = [];
  appointments: Appointment[] = [
    {
      uuid: '00000000-0000-0000-0000-000000000001',
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
      title: 'Meeting with Bob',
      startTime: '09:00',
      endTime: '10:00',
      color: '#FF5733', // Example color (Red)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000002',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 2),
      title: 'Lunch with Alice',
      startTime: '12:00',
      endTime: '13:00',
      color: '#33FF57', // Example color (Green)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000003',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 3),
      title: 'Project Deadline',
      startTime: '15:00',
      endTime: '16:00',
      color: '#3357FF', // Example color (Blue)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000004',
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
      title: 'Doctor Appointment',
      startTime: '10:00',
      endTime: '11:00',
      color: '#FF33A1', // Example color (Pink)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000005',
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + 1
      ),
      title: 'Team Meeting',
      startTime: '14:00',
      endTime: '15:00',
      color: '#FFD700', // Example color (Gold)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000006',
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
      title: 'Coffee with Mike',
      startTime: '11:00',
      endTime: '12:00',
      color: '#8A2BE2', // Example color (BlueViolet)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000007',
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + 4
      ),
      title: 'Client Call',
      startTime: '09:30',
      endTime: '10:30',
      color: '#FF1493', // Example color (DeepPink)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000008',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 8),
      title: 'Gym',
      startTime: '17:00',
      endTime: '18:00',
      color: '#20B2AA', // Example color (LightSeaGreen)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000009',
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() - 1
      ),
      title: 'Dentist Appointment',
      startTime: '11:30',
      endTime: '12:30',
      color: '#DC143C', // Example color (Crimson)
    },
    {
      uuid: '00000000-0000-0000-0000-00000000000a',
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() - 2
      ),
      title: 'Birthday Party',
      startTime: '19:00',
      endTime: '21:00',
      color: '#32CD32', // Example color (LimeGreen)
    },
    {
      uuid: '00000000-0000-0000-0000-00000000000b',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 11),
      title: 'Conference',
      startTime: '13:00',
      endTime: '14:00',
      color: '#FF6347', // Example color (Tomato)
    },
    {
      uuid: '00000000-0000-0000-0000-00000000000c',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 12),
      title: 'Workshop',
      startTime: '10:00',
      endTime: '12:00',
      color: '#3CB371', // Example color (MediumSeaGreen)
    },
    {
      uuid: '00000000-0000-0000-0000-00000000000d',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 13),
      title: 'Brunch with Sarah',
      startTime: '11:00',
      endTime: '12:00',
      color: '#BA55D3', // Example color (MediumOrchid)
    },
    {
      uuid: '00000000-0000-0000-0000-00000000000e',
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + 2
      ),
      title: 'Networking Event',
      startTime: '18:00',
      endTime: '20:00',
      color: '#48D1CC', // Example color (MediumTurquoise)
    },
    {
      uuid: '00000000-0000-0000-0000-00000000000f',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 16),
      title: 'Yoga Class',
      startTime: '07:00',
      endTime: '08:00',
      color: '#00FA9A', // Example color (MediumSpringGreen)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000010',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 16),
      title: 'Strategy Meeting',
      startTime: '10:00',
      endTime: '11:30',
      color: '#DA70D6', // Example color (Orchid)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000011',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 17),
      title: 'Call with Investor',
      startTime: '14:00',
      endTime: '15:00',
      color: '#FF4500', // Example color (OrangeRed)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000012',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 18),
      title: 'Team Lunch',
      startTime: '12:00',
      endTime: '13:00',
      color: '#ADFF2F', // Example color (GreenYellow)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000013',
      date: new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() + 3
      ),
      title: 'HR Meeting',
      startTime: '16:00',
      endTime: '17:00',
      color: '#FFD700', // Example color (Gold)
    },
    {
      uuid: '00000000-0000-0000-0000-000000000014',
      date: new Date(new Date().getFullYear(), new Date().getMonth(), 20),
      title: 'Board Meeting',
      startTime: '11:00',
      endTime: '12:00',
      color: '#00BFFF', // Example color (DeepSkyBlue)
    },
  ];


  getRandomColor(): string {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = 0.4;
    return `rgba(${r},${g},${b},${a})`;
  }

  generateView(view: CalendarView, date: Date) {
    switch (view) {
      case CalendarView.Month:
        this.generateMonthView(date);
        break;
      case CalendarView.Week:
        this.generateWeekView(date);
        break;
      case CalendarView.Day:
        this.generateDayView(date);
        break;
      default:
        this.generateMonthView(date);
    }
  }

  generateMonthView(date: Date) {
    const start = new Date(date.getFullYear(), date.getMonth(), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.weeks = [];
    this.monthDays = [];
    let week: Date[] = [];

    for (let day = start.getDay(); day > 0; day--) {
      const prevDate = new Date(start);
      prevDate.setDate(start.getDate() - day);
      week.push(prevDate);
      this.monthDays.push(prevDate);
    }

    for (let day = 1; day <= end.getDate(); day++) {
      const currentDate = new Date(date.getFullYear(), date.getMonth(), day);
      this.monthDays.push(currentDate);
      week.push(currentDate);
      if (week.length === 7) {
        this.weeks.push(week);
        week = [];
      }
    }

    for (let day = 1; this.monthDays.length % 7 !== 0; day++) {
      const nextDate = new Date(end);
      nextDate.setDate(end.getDate() + day);
      this.monthDays.push(nextDate);
    }

    for (let day = 1; week.length < 7; day++) {
      const nextDate = new Date(end);
      nextDate.setDate(end.getDate() + day);
      week.push(nextDate);
    }

    if (week.length > 0) {
      this.weeks.push(week);
    }
  }

  generateWeekView(date: Date) {
    const startOfWeek = this.startOfWeek(date);
    this.monthDays = [];

    for (let day = 0; day < 7; day++) {
      const weekDate = new Date(startOfWeek);
      weekDate.setDate(startOfWeek.getDate() + day);
      this.monthDays.push(weekDate);
    }
  }

  generateDayView(date: Date) {
    this.monthDays = [date];
  }


  startOfWeek(date: Date): Date {
    const start = new Date(date);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(start.setDate(diff));
  }

  generateTimeSlots() {
    for (let hour = 0; hour <= 24; hour++) {
      const time = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      this.timeSlots.push(time);
    }
  }


  selectDate(date?: Date, startTime?: string) {
    if (date) {
      this.selectedDate = date;
    } else {
      this.selectedDate = new Date();
    }
    this.selectedStartTime = startTime;
    this.openDialog();
  }

  openDialog(): void {
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    const h = hour < 10 ? `0${hour}` : hour;
    const m = minutes < 10 ? `0${minutes}` : minutes;
    const dialogRef = this.dialog.open(AppointmentModalComponent, {
      width: '500px',
      panelClass: 'dialog-container',
      data: {
        date: this.selectedDate,
        title: '',
        startTime: this.selectedStartTime || `${h}:${m}`,
        endTime: this.selectedStartTime || `${h}:${m}`,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addAppointment(
          result.date,
          result.title,
          result.startTime,
          result.endTime
        );
      }
    });
  }

  addAppointment(
    date: Date,
    title: string,
    startTime: string,
    endTime: string
  ) {
    this.appointments.push({
      uuid: this.generateUUID(),
      date,
      title,
      startTime,
      endTime,
      color: this.getRandomColor(),
    });
  }

  generateUUID(): string {
    let d = new Date().getTime(); //Timestamp
    let d2 =
      (typeof performance !== 'undefined' &&
        performance.now &&
        performance.now() * 1000) ||
      0;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        let r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }

  switchToView(view: CalendarView) {
    this.currentView = view;
    this.generateView(this.currentView, this.viewDate);
  }

  previous() {
    if (this.currentView === 'month') {
      this.viewDate = new Date(
        this.viewDate.setMonth(this.viewDate.getMonth() - 1)
      );
      this.generateMonthView(this.viewDate);
    } else if (this.currentView === 'week') {
      this.viewDate = new Date(
        this.viewDate.setDate(this.viewDate.getDate() - 7)
      );
      this.generateWeekView(this.viewDate);
    } else {
      this.viewDate = new Date(
        this.viewDate.setDate(this.viewDate.getDate() - 1)
      );
      this.generateDayView(this.viewDate);
    }
  }

  next() {
    if (this.currentView === 'month') {
      this.viewDate = new Date(
        this.viewDate.setMonth(this.viewDate.getMonth() + 1)
      );
      this.generateMonthView(this.viewDate);
    } else if (this.currentView === 'week') {
      this.viewDate = new Date(
        this.viewDate.setDate(this.viewDate.getDate() + 7)
      );
      this.generateWeekView(this.viewDate);
    } else {
      this.viewDate = new Date(
        this.viewDate.setDate(this.viewDate.getDate() + 1)
      );
      this.generateDayView(this.viewDate);
    }
  }

  
  drop(event: CdkDragDrop<Appointment[]>, date: Date, slot?: string) {
    const movedAppointment = event.item.data;
    movedAppointment.date = date;
    if (slot) {
      movedAppointment.startTime = slot;
      movedAppointment.endTime = slot;
    }
  }
  
  isCurrentMonth(date: Date): boolean {
    return (
      date.getMonth() === this.viewDate.getMonth() &&
      date.getFullYear() === this.viewDate.getFullYear()
    );
  }
  
  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }

  editAppointment(appointment: Appointment, event: Event) {
    event.preventDefault();
    const dialogRef = this.dialog.open(AppointmentModalComponent, {
      width: '500px',
      panelClass: 'dialog-container',
      data: appointment,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const index = this.appointments.findIndex(
          (appointment) => appointment.uuid === result.uuid
        );
        if (result.remove) {
          this.appointments.splice(index, 1);
        } else {
          this.appointments[index] = result;
        }
      }
    });
  }

  isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }
  viewToday(): void {
    this.viewDate = new Date();
    this.generateView(this.currentView, this.viewDate);
  }

  getAppointmentsForDateTime(date: Date, timeSlot: string): Appointment[] {
    const appointmentsForDateTime: Appointment[] = this.appointments.filter(
      (appointment) =>
        this.isSameDate(appointment.date, date) &&
        appointment.startTime <= timeSlot &&
        appointment.endTime >= timeSlot
    );

    return appointmentsForDateTime;
  }

  getAppointmentsForDate(day: Date, timeSlots: string[]) {
    return this.appointments
      .filter((appointment) => {
        return this.isSameDate(appointment.date, day);
      })
      .map((appointment) => {
        const startTimeIndex = timeSlots.indexOf(appointment.startTime);
        const endTimeIndex = timeSlots.indexOf(appointment.endTime);
        return { ...appointment, startTimeIndex, endTimeIndex };
      });
  }

}