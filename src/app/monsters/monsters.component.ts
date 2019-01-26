import {Component, OnInit, AfterContentChecked, AfterViewChecked} from '@angular/core';
import {Injectable} from '@angular/core';
import {Monster} from '../services/monster_service/monster';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as PostActions from '../post/actions/monster.actions';
import * as Past from '../post';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})

@Injectable()
export class MonstersComponent implements OnInit, AfterContentChecked, AfterViewChecked {
  monsters: Monster[];
  monsters$: Observable<Monster[]>;
  searchTerm: string;
  send: object;

  post: Observable<Past.Post>;
  text: object;
  editState: boolean;

  constructor(
    private store: Store<Past.Post>) {
    this.post = this.store.select('post');
    this.editState = false;
  }

  navigate(thing) {
    this.send = {};
    console.log(thing);
    this.send = thing;
  }

  ngOnInit() {
    // debugger;
    this.monsters$ = this.store.select(Past.getAllMonsters);
    this.store.dispatch(new PostActions.LoadData());
  }

  changeState() {
    (this.editState) ? this.editState = false : this.editState = true;
  }

  ngAfterContentChecked(): void {
  }

  ngAfterViewChecked(): void {
  }
}
