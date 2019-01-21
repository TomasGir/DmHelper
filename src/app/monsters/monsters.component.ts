import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {MonsterService} from '../services/monster_service/monster.service';
import {Monster} from '../services/monster_service/monster';

@Component({
  selector: 'app-monsters',
  templateUrl: './monsters.component.html',
  styleUrls: ['./monsters.component.scss']
})

@Injectable()
export class MonstersComponent implements OnInit {

  monsters: Monster[];
  searchTerm: string;
  send: object;

  constructor(
    private monsterService: MonsterService) {
  }

  getMonsters(): void {
    this.monsterService.getMonsters()
      .subscribe(monster => this.monsters = monster);
  }

  navigate(thing) {
    this.send = {};
    this.send = this.monsters[thing - 1];
  }

  ngOnInit() {
    this.getMonsters();
  }

}
