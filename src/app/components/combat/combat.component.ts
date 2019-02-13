import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.scss']
})
export class CombatComponent {

  participants = [
    {name: 'Ally 1', initiative: 2},
    {name: 'Ally 2', initiative: 10}
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.participants, event.previousIndex, event.currentIndex);
  }

}
