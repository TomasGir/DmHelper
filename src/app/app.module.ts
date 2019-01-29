import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CustomModuleModule} from 'src/app/modules/custom-module.module';
import {MainNavComponent} from './components/main-nav/main-nav.component';
import {AppRoutingModule} from './app-routing.module';
import {MonstersComponent} from './components/monsters/monsters.component';
import {WorldComponent} from './components/world/world.component';
import {NpcComponent} from './components/npc/npc.component';
import {ItemsComponent} from './components/items/items.component';
import {SpellsComponent} from './components/spells/spells.component';
import {CombatComponent} from './components/combat/combat.component';
import {CharactersComponent} from './components/characters/characters.component';
import {MonsterDetailComponent} from './components/monster-detail/monster-detail.component';
import {DiceComponent} from './components/dice/dice.component';
import {MonsterFilterPipe} from './components/monsters/monster-filter.pipe';
import {MonsterDetailFilterPipe} from './components/monster-detail/monster-detail-filter.pipe';
import {ItemFilterPipe} from './components/items/item-filter.pipe';
import {SpellFilterPipe} from './components/spells/spell-filter.pipe';
import {SpellDetailsComponent} from './components/spell-details/spell-details.component';
import {ItemDetailsComponent} from './components/item-details/item-details.component';
import {CalendarComponent} from './components/calendar/calendar.component';

import {StoreModule} from '@ngrx/store';
import {MonsterReducer} from './post';
import {EffectsModule} from '@ngrx/effects';
import {MonsterEffects} from './post';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainNavComponent,
    MonstersComponent,
    WorldComponent,
    NpcComponent,
    ItemsComponent,
    SpellsComponent,
    CombatComponent,
    CharactersComponent,
    MonsterDetailComponent,
    DiceComponent,
    MonsterFilterPipe,
    MonsterDetailFilterPipe,
    ItemFilterPipe,
    SpellFilterPipe,
    SpellDetailsComponent,
    ItemDetailsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomModuleModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      post: MonsterReducer
    }),
    EffectsModule.forRoot([MonsterEffects]),
    EffectsModule.forFeature([MonsterEffects])
  ],
  exports: [
    CustomModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
