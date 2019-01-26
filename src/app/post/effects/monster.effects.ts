import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as PostActions from '../actions/monster.actions';
import { map, switchMap, catchError} from 'rxjs/operators';
import {MonsterService} from '../../services/monster_service/monster.service';
import {of} from 'rxjs';

@Injectable()
export class MonsterEffects {
  constructor(
    private actions$: Actions,
    private monsterService: MonsterService
  ) {
  }

  @Effect()
  loadMonsters$ = this.actions$
    .pipe(ofType(PostActions.LOAD_DATA),
      switchMap(() => {
        // debugger;
        return this.monsterService.getMonsters()
          .pipe(
            map(monster => new PostActions.LoadDataSuccess(monster)),
            catchError(err => of(new PostActions.LoadDataFail(err)))
          );
      })
    );
}
