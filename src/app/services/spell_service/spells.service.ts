import {Injectable} from '@angular/core';
import {Spells} from './spells';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  private spellsUrl = '/assets/spells/5e-SRD-Spells.json';

  constructor(private httpService: HttpClient) {
  }

  getSpells(): Observable<Spells[]> {
    return this.httpService.get<Spells[]>(this.spellsUrl);
  }
}
