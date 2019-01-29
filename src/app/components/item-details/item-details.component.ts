import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  @Input() childMessage: string;

  constructor() {
  }

  ngOnInit() {
  }

}
