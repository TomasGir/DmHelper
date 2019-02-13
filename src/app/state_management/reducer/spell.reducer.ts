import * as StateActions from '../actions/spell.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export type SpellAction = StateActions.AllSpells;

const defaultState = {
  data: []
};

export function SpellReducer(state = defaultState, action: SpellAction) {
  switch (action.type) {
    case StateActions.LOAD_SPELL_DATA:
      return {...state};
    case StateActions.LOAD_SPELL_DATA_SUCCESS:
      const data = action.payload;
      return {...state, data};
    case StateActions.LOAD_SPELL_DATA_FAIL:
      return {...state};
    default:
      return state;
  }
}

export const getSpells = (state) => state.data;
export const getSpellState = createFeatureSelector('post1');
export const getAllSpells = createSelector(getSpellState, getSpells);
