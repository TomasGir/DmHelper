import {Action} from '@ngrx/store';

export const ADD_COMBATANT = '[TUTORIAL] Add';

export class AddCombatant implements Action {
  readonly type = ADD_COMBATANT;

  constructor(public payload: any) {
  }
}

export type Actions = AddCombatant;
