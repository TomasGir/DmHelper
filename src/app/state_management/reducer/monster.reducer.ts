import * as StateActions from '../actions/monster.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export type Action = StateActions.All;

const defaultState = {
  text: []
};

export function MonsterReducer(state = defaultState, action: Action) {
  switch (action.type) {
    case StateActions.LOAD_MONSTER_DATA:
      return {...state};
    case StateActions.LOAD_MONSTER_DATA_SUCCESS:
      const text = action.payload;
      return {...state};
    case StateActions.LOAD_MONSTER_DATA_FAIL:
      return {...state};
    default:
      return state;
  }
}

export const getMonsters = (state) => state.text;
export const getMonsterState = createFeatureSelector('post2');
export const getAllMonsters = createSelector(getMonsterState, getMonsters);
