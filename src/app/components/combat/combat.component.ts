import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent {

  participants = [
    'Ally 1',
    'Ally 2',
    'Ally 3',
    'Ally 4',
    'Enemy 1',
    'Enemy 2'
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.participants, event.previousIndex, event.currentIndex);
  }

}
