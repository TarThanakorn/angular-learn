import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingAndOutputComponent } from './binding-and-output.component';

describe('BindingAndOutputComponent', () => {
  let component: BindingAndOutputComponent;
  let fixture: ComponentFixture<BindingAndOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindingAndOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingAndOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
