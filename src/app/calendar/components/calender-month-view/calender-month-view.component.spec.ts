import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderMonthViewComponent } from './calender-month-view.component';

describe('CalenderMonthViewComponent', () => {
  let component: CalenderMonthViewComponent;
  let fixture: ComponentFixture<CalenderMonthViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderMonthViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderMonthViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
