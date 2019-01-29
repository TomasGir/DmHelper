import {Component, OnInit} from '@angular/core';
import {Monster} from '../../services/monster_service/monster';
import {Observable} from 'rxjs';
import * as Past from '../../post';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-npc',
  templateUrl: './npc.component.html',
  styleUrls: ['./npc.component.scss']
})
export class NpcComponent implements OnInit {
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
    this.send = thing;
  }

  ngOnInit() {
    this.monsters$ = this.store.select(Past.getAllMonsters);
  }

}
