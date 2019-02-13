import {Action} from '@ngrx/store';
import {Items} from '../../services/item_service/items';

export const LOAD_ITEM_DATA = '[Item] Load_data';
export const LOAD_ITEM_DATA_SUCCESS = '[Item] Load_data_success';
export const LOAD_ITEM_DATA_FAILURE = '[Item] Load_data_failure';

export class LoadItemData implements Action {
  readonly type = LOAD_ITEM_DATA;
}

export class LoadItemDataSuccess implements Action {
  readonly type = LOAD_ITEM_DATA_SUCCESS;

  constructor(public payload: Items[]) {
  }
}

export class LoadItemDataFailure implements Action {
  readonly type = LOAD_ITEM_DATA_FAILURE;

  constructor(public payload: any) {
  }
}

export type AllItems = LoadItemData | LoadItemDataSuccess | LoadItemDataFailure;
