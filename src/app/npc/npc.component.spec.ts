import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {NpcComponent} from './npc.component';

describe('NpcComponent', () => {
  let component: NpcComponent;
  let fixture: ComponentFixture<NpcComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NpcComponent]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(NpcComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;
  });

});
