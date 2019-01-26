import * as StateActions from '../actions/monster.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export type Action = StateActions.All;

const defaultState = {
  text: []
};

export function MonsterReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case StateActions.LOAD_DATA:
      return {...state};
    case StateActions.LOAD_DATA_SUCCESS:
      const text = action.payload;
      return (state.text.length === 0) ? {...state, text} : {...state};
    case StateActions.LOAD_DATA_FAIL:
      return {...state};
    default:
      return state;
  }
}

export const getMonsters = (state) => state.text;
export const getMonsterState = createFeatureSelector('post');
export const getMonstersState = createSelector(getMonsterState, (state) => state);
export const getAllMonsters = createSelector(getMonsterState, getMonsters);
