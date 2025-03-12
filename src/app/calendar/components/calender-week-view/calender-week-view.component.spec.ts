import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderWeekViewComponent } from './calender-week-view.component';

describe('CalenderWeekViewComponent', () => {
  let component: CalenderWeekViewComponent;
  let fixture: ComponentFixture<CalenderWeekViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalenderWeekViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderWeekViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
