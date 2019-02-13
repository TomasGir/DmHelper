import * as StateActions from '../actions/item.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export type ItemAction = StateActions.AllItems;

const defaultState = {
  data: []
};

export function ItemReducer(state = defaultState, action: ItemAction) {
  switch (action.type) {
    case StateActions.LOAD_ITEM_DATA:
      return {...state};
    case  StateActions.LOAD_ITEM_DATA_SUCCESS:
      const data = action.payload;
      return {...state, data};
    case StateActions.LOAD_ITEM_DATA_FAILURE:
      return {...state};
    default:
      return state;
  }
}

export const getItems = (state) => state.data;
export const getItemState = createFeatureSelector('itemObs');
export const getAllItems = createSelector(getItemState, getItems);
