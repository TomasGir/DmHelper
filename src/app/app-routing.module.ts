import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MonstersComponent} from './monsters/monsters.component';
import {WorldComponent} from './world/world.component';
import {NpcComponent} from './npc/npc.component';
import {ItemsComponent} from './items/items.component';
import {SpellsComponent} from './spells/spells.component';
import {CombatComponent} from './combat/combat.component';
import {CharactersComponent} from './characters/characters.component';

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
