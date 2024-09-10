import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.module';
import { Component } from '@angular/core';

describe( ActionDirective.name, () => {

  let fixture: ComponentFixture<ActionDirectiveTestMockComponent>;
  let component: ActionDirectiveTestMockComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestMockComponent],
      imports: [ActionDirectiveModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestMockComponent);
    component = fixture.componentInstance;
  })

  // it('should create an instance', () => {
  //   const directive = new ActionDirective();
  //   expect(directive).toBeTruthy();
  // });

  it('(Test DOM): (@Output appAction) should emit event payload when ENTER kay is pressed', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new KeyboardEvent('keyap', { key: 'Enter'});
    div.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true)
  });

  it('(Test DOM): (@Output appAction) should emit event payload when clicked', () => {
    const div: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
    const event = new Event('click');
    div.dispatchEvent(event);
    expect(component.hasEvent()).toBe(true);
  });

  @Component({  // componente fake
    template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
  })
  class ActionDirectiveTestMockComponent {
    private event: Event = null;
    public actionHandler(event: Event): void {
      this.event = event;
    }
    public hasEvent(): boolean {
      return !!this.event;
    }
  }
});
