import {Action} from '@ngrx/store';
import {Spells} from '../../services/spell_service/spells';

export const LOAD_SPELL_DATA = '[Spell] Load_data';
export const LOAD_SPELL_DATA_SUCCESS = '[Spell] Load_data_success';
export const LOAD_SPELL_DATA_FAIL = '[Spell] Load_data_fail';

export class LoadSpellData implements Action {
  readonly type = LOAD_SPELL_DATA;
}

export class LoadSpellDataSuccess implements Action {
  readonly type = LOAD_SPELL_DATA_SUCCESS;

  constructor(public payload: Spells[]) {
  }
}

export class LoadSpellDataFail implements Action {
  readonly type = LOAD_SPELL_DATA_FAIL;

  constructor(public payload: any) {
  }
}

export type AllSpells = LoadSpellData | LoadSpellDataSuccess | LoadSpellDataFail;
