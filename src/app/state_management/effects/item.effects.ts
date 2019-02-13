import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as ItemActions from '../actions/item.action';
import {map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {ItemsService} from '../../services/item_service/items.service';

@Injectable()
export class ItemEffects {
  constructor(
    private actions$: Actions,
    private itemService: ItemsService
  ) {
  }

  @Effect()
  loadItems$ = this.actions$
    .pipe(ofType(ItemActions.LOAD_ITEM_DATA),
      switchMap(() => {
        return this.itemService.getItems()
          .pipe(
            map(item => new ItemActions.LoadItemDataSuccess(item)),
            catchError(err => of(new ItemActions.LoadItemDataFailure(err)))
          );
      }));
}
