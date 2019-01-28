import {Component, OnInit} from '@angular/core';
import * as  MonsterActions from './post/actions/monster.actions';
import * as Past from './post';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dmhelper';
  post: Observable<Past.Post>;

  constructor(
    private store: Store<Past.Post>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new MonsterActions.LoadData());
  }

}
