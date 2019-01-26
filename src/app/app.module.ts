import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MenuComponent} from './menu/menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CustomModuleModule} from 'src/app/custom-module/custom-module.module';
import {MainNavComponent} from './main-nav/main-nav.component';
import {AppRoutingModule} from './app-routing.module';
import {MonstersComponent} from './monsters/monsters.component';
import {WorldComponent} from './world/world.component';
import {NpcComponent} from './npc/npc.component';
import {ItemsComponent} from './items/items.component';
import {SpellsComponent} from './spells/spells.component';
import {CombatComponent} from './combat/combat.component';
import {CharactersComponent} from './characters/characters.component';
import {MonsterDetailComponent} from './monster-detail/monster-detail.component';
import {DiceComponent} from './dice/dice.component';
import {MonsterFilterPipe} from './monsters/monster-filter.pipe';
import {MonsterDetailFilterPipe} from './monster-detail/monster-detail-filter.pipe';
import {ItemFilterPipe} from './items/item-filter.pipe';
import {SpellFilterPipe} from './spells/spell-filter.pipe';
import {SpellDetailsComponent} from './spell-details/spell-details.component';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {CalendarComponent} from './calendar/calendar.component';

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
