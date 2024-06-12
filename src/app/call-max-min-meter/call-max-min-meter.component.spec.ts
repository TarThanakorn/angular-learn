import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallMaxMinMeterComponent } from './call-max-min-meter.component';

describe('CallMaxMinMeterComponent', () => {
  let component: CallMaxMinMeterComponent;
  let fixture: ComponentFixture<CallMaxMinMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallMaxMinMeterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallMaxMinMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
