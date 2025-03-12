import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderDayViewComponent } from './calender-day-view.component';

describe('CalenderDayViewComponent', () => {
  let component: CalenderDayViewComponent;
  let fixture: ComponentFixture<CalenderDayViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderDayViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderDayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
