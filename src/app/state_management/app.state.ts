import {Combatants} from './module/combat.module';

export interface AppState {
  readonly combatReducer: Combatants[];
}
