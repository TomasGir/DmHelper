import {Action} from '@ngrx/store';
import { Monster} from '../../services/monster_service/monster';

export const LOAD_DATA = '[Post] Load_data';
export const LOAD_DATA_SUCCESS = '[Post] Load_data_success';
export const LOAD_DATA_FAIL = '[Post] Load_data_fail';

export class LoadData implements Action {
  readonly type = LOAD_DATA;
}

export class LoadDataSuccess implements Action {
  readonly type = LOAD_DATA_SUCCESS;

  constructor(public payload: Monster[]) {
  }
}

export class LoadDataFail implements Action {
  readonly type = LOAD_DATA_FAIL;

  constructor(public payload: any) {
  }
}

export type All = LoadData | LoadDataSuccess | LoadDataFail;
