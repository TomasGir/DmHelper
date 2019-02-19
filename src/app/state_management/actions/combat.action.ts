import {Action} from '@ngrx/store';
import {Combatants} from '../module/combat.module';

export const ADD_TUTORIAL = '[TUTORIAL] Add';

export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Combatants) {
  }
}

export type Actions = AddTutorial;
