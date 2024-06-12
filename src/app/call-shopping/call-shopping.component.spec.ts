import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallShoppingComponent } from './call-shopping.component';

describe('CallShoppingComponent', () => {
  let component: CallShoppingComponent;
  let fixture: ComponentFixture<CallShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CallShoppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
