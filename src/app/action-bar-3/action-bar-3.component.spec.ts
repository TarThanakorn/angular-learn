import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBar3Component } from './action-bar-3.component';

describe('ActionBar3Component', () => {
  let component: ActionBar3Component;
  let fixture: ComponentFixture<ActionBar3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionBar3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionBar3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
