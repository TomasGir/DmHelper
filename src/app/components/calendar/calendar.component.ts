import {Component, Injectable, OnInit, Inject} from '@angular/core';
import {CalendarService} from '../../services/calendar/calendar.service';
import {Calendar} from '../../services/calendar/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

@Injectable()
export class CalendarComponent implements OnInit {

  calendar: Calendar[];
  currentMonth = 1;

  animal: string;
  name: string;

  constructor(private calendarService: CalendarService) {
  }

  ngOnInit() {
    this.getCalendar();
  }

  getCalendar(): void {
    this.calendarService.getCalendar()
      .subscribe(calendar => this.calendar = calendar);
  }

  lastMonth() {
    (this.currentMonth <= 1) ? this.currentMonth = 12 : this.currentMonth--;
  }

  nextMonth() {
    (this.currentMonth >= 12) ? this.currentMonth = 1 : this.currentMonth++;
  }
}
