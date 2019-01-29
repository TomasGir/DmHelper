import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.scss']
})
export class MonsterDetailComponent implements OnInit {

  @Input() childMessage: string;
  editState: boolean;

  constructor() {
    this.editState = false;
  }

  changeState() {
    (this.editState) ? this.editState = false : this.editState = true;
  }

  ngOnInit(): void {
  }

}
