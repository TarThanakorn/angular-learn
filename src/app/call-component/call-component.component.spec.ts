import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallComponentComponent } from './call-component.component';

describe('CallComponentComponent', () => {
  let component: CallComponentComponent;
  let fixture: ComponentFixture<CallComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
