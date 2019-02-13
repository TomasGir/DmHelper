import {Injectable} from '@angular/core';
import {Monster} from './monster';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  private monsterUrl = '/assets/monsters/5e-SRD-Monsters.json';

  constructor(private httpService: HttpClient) {
  }

  getMonsters(): Observable<Monster[]> {
    return this.httpService.get<Monster[]>(this.monsterUrl);
  }

}
