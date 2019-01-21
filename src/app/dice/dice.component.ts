import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  roll: number;
  rollSum: number;
  rollVal = [];

  constructor() {
  }

  ngOnInit() {
  }

  getRand(number, count): void {
    this.roll = 0;
    this.rollSum = 0;
    this.rollVal = [];

    if (count < 1) {
      count = 1;
    }
    for (let i = 0; i < count; i++) {
      this.roll = Math.floor(Math.random() * number) + 1;
      this.rollVal.push(this.roll);
      this.rollSum = this.rollSum + this.roll;
    }
  }

}
