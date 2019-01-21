import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MainNavComponent} from './main-nav/main-nav.component';
import {MenuComponent} from './menu/menu.component';
import {DiceComponent} from './dice/dice.component';
import {AppRoutingModule} from './app-routing.module';
import {WorldComponent} from './world/world.component';
import {MonstersComponent} from './monsters/monsters.component';
import {MonsterFilterPipe} from './monsters/monster-filter.pipe';
import {ItemsComponent} from './items/items.component';
import {SpellsComponent} from './spells/spells.component';
import {CombatComponent} from './combat/combat.component';
import {CharactersComponent} from './characters/characters.component';
import {MonsterDetailComponent} from './monster-detail/monster-detail.component';
import {ItemFilterPipe} from './items/item-filter.pipe';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {SpellFilterPipe} from './spells/spell-filter.pipe';
import {SpellDetailsComponent} from './spell-details/spell-details.component';
import {CalendarComponent} from './calendar/calendar.component';

import {NpcComponent} from './npc/npc.component';
import {
  MatSidenav,
  MatToolbar,
  MatNavList,
  MatIcon,
  MatSidenavContent,
  MatSidenavContainer,
  MatTooltip,
  MatCardTitle,
  MatCardSubtitle,
  MatCardHeader,
  MatCardContent,
  MatCardActions,
  MatCard,
  MatGridTile,
  MatGridList
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';
import {OverlayModule} from '@angular/cdk/overlay';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainNavComponent,
        MenuComponent,
        DiceComponent,
        WorldComponent,
        MonstersComponent,
        ItemsComponent,
        CharactersComponent,
        SpellsComponent,
        CombatComponent,
        NpcComponent,
        MatSidenav,
        MatToolbar,
        MatNavList,
        MatIcon,
        MatSidenavContent,
        MatSidenavContainer,
        MatTooltip,
        MonsterFilterPipe,
        MatCardTitle,
        MatCardSubtitle,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
        MatCard,
        MatGridList,
        MatGridTile,
        MonsterDetailComponent,
        ItemFilterPipe,
        ItemDetailsComponent,
        SpellFilterPipe,
        SpellDetailsComponent,
        CalendarComponent
      ],
      imports: [
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule,
        OverlayModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' }
        ]
    }).compileComponents();
  }));
});
