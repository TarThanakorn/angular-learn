import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionBar2Component } from './action-bar-2.component';

describe('ActionBar2Component', () => {
  let component: ActionBar2Component;
  let fixture: ComponentFixture<ActionBar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionBar2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
