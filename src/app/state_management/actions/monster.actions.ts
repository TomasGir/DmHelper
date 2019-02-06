import {Action} from '@ngrx/store';
import { Monster} from '../../services/monster_service/monster';

export const LOAD_MONSTER_DATA = '[Monster] Load_data';
export const LOAD_MONSTER_DATA_SUCCESS = '[Monster] Load_data_success';
export const LOAD_MONSTER_DATA_FAIL = '[Monster] Load_data_fail';

export class LoadMonsterData implements Action {
  readonly type = LOAD_MONSTER_DATA;
}

export class LoadMonsterDataSuccess implements Action {
  readonly type = LOAD_MONSTER_DATA_SUCCESS;

  constructor(public payload: Monster[]) {
  }
}

export class LoadMonsterDataFail implements Action {
  readonly type = LOAD_MONSTER_DATA_FAIL;

  constructor(public payload: any) {
  }
}

export type All = LoadMonsterData | LoadMonsterDataSuccess | LoadMonsterDataFail;
