import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as MonsterActions from '../actions/monster.actions';
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
    .pipe(ofType(MonsterActions.LOAD_MONSTER_DATA),
      switchMap(() => {
        return this.monsterService.getMonsters()
          .pipe(
            map(monster => new MonsterActions.LoadMonsterDataSuccess(monster)),
            catchError(err => of(new MonsterActions.LoadMonsterDataFail(err)))
          );
      })
    );
}
