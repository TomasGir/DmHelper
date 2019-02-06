import {Injectable} from '@angular/core';
import {Effect, Actions, ofType} from '@ngrx/effects';
import * as SpellActions from '../actions/spell.actions';
import { map, switchMap, catchError} from 'rxjs/operators';
import {of} from 'rxjs';
import {SpellsService} from '../../services/spell_service/spells.service';

@Injectable()
export class SpellEffects {
  constructor(
    private actions$: Actions,
    private spellsService: SpellsService
  ) {
  }

  @Effect()
  loadSpells$ = this.actions$
    .pipe(ofType(SpellActions.LOAD_SPELL_DATA),
      switchMap(() => {
        return this.spellsService.getSpells()
          .pipe(
            map(spell => new SpellActions.LoadSpellDataSuccess(spell)),
            catchError(err => of(new SpellActions.LoadSpellDataFail(err)))
          );
      })
    );
}
