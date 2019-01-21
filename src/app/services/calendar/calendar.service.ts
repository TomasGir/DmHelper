import {Injectable} from '@angular/core';
import {Calendar} from './calendar';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private calendarUrl = 'assets/calendar/calendar.json';

  constructor(private httpService: HttpClient) {
  }

  getCalendar(): Observable<Calendar[]> {
    return this.httpService.get<Calendar[]>(this.calendarUrl);
  }
}
