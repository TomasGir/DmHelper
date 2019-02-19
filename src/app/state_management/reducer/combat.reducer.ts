import {Combatants} from '../module/combat.module';
import * as TutorialActions from './../actions/combat.action';

export function reducer(state: Combatants[] = [], action: TutorialActions.Actions) {

  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state,  action.payload];
    default:
      return state;
  }
}
