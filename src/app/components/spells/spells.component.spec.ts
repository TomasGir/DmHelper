import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpellsComponent} from './spells.component';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';
import {SpellFilterPipe} from './spell-filter.pipe';
import {SpellDetailsComponent} from '../spell-details/spell-details.component';
import {SpellsService} from '../../services/spell_service/spells.service';
import {Classes, School, Spells, Subclasses} from '../../services/spell_service/spells';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';

describe('SpellsComponent', () => {
  let component: SpellsComponent;
  let fixture: ComponentFixture<SpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpellsComponent,
        SpellFilterPipe,
        SpellDetailsComponent],
      imports: [
        FormsModule,
        MatSortModule,
        MatFormFieldModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create spell component', () => {
    expect(component).toBeTruthy();
  });
});
