import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Combatants} from '../../state_management/module/combat.module';
import {AppState} from '../../state_management/app.state';
import * as CombatActions from '../../state_management/actions/combat.action';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {

  constructor(private store: Store<AppState>) {
    this.tutorials = store.select('tutorial');
  }

  tutorials: Observable<Combatants[]>;

  drop(event: CdkDragDrop<string[]>) {
    this.tutorials.subscribe(val => {
      moveItemInArray(val, event.previousIndex, event.currentIndex);
    });
  }

  ngOnInit() {
  }

}
