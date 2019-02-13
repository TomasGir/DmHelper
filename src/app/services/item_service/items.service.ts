import {Injectable} from '@angular/core';
import {Items} from './items';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemsUrl = '/assets/items/5e-SRD-Equipment.json';

  constructor(private httpService: HttpClient) {
  }

  getItems(): Observable<Items[]> {
    return this.httpService.get<Items[]>(this.itemsUrl);
  }
}
