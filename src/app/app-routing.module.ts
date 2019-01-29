import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MonstersComponent} from './components/monsters/monsters.component';
import {WorldComponent} from './components/world/world.component';
import {NpcComponent} from './components/npc/npc.component';
import {ItemsComponent} from './components/items/items.component';
import {SpellsComponent} from './components/spells/spells.component';
import {CombatComponent} from './components/combat/combat.component';
import {CharactersComponent} from './components/characters/characters.component';

const routes: Routes = [
  {path: 'world', component: WorldComponent},
  {path: 'monsters', component: MonstersComponent},
  {path: 'npc', component: NpcComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'spells', component: SpellsComponent},
  {path: 'combat', component: CombatComponent},
  {path: 'characters', component: CharactersComponent},
  {path: '', redirectTo: '/world', pathMatch: 'full'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  declarations: []
})
export class AppRoutingModule { }
