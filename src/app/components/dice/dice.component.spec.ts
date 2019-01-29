import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {DiceComponent} from './dice.component';
import {MatTooltipModule} from '@angular/material/tooltip';

describe('DiceComponent', () => {
  let component: DiceComponent;
  let fixture: ComponentFixture<DiceComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let htmlElementVal: number;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiceComponent],
      imports: [ MatTooltipModule ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(DiceComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('input'));
    htmlElement = debugElement.nativeElement;
    htmlElementVal = debugElement.nativeElement.value;
  });

  it('should have input with value of 1', () => {
    expect(htmlElementVal.toString()).toEqual('1');
  });

  it('should have input with value of 2', () => {
    htmlElementVal = 2;
    htmlElement.dispatchEvent(new Event('input'));
    expect(htmlElementVal).toEqual(2);
  });

  it('should roll a random number', () => {
    component.getRand(20, htmlElementVal);
    fixture.detectChanges();
    expect(component.rollSum).toBeLessThan(21);
    expect(component.rollSum).toBeGreaterThan(0);
  });

  it('should roll a random number twice', () => {
    htmlElementVal = 2;
    component.getRand(20, htmlElementVal);
    fixture.detectChanges();
    expect(component.rollVal.length).toEqual(2);
  });

});
