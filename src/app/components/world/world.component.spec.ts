import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldComponent } from './world.component';
import {CalendarComponent} from '../components/calendar/calendar.component';
import {HttpClientModule} from '@angular/common/http';

describe('WorldComponent', () => {
  let component: WorldComponent;
  let fixture: ComponentFixture<WorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldComponent, CalendarComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //
  // it('should contains spec with an expectation', function() {
  //   expect(true).toBe(true);
  // });
});
