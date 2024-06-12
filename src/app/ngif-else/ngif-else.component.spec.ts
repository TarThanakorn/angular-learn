import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifElseComponent } from './ngif-else.component';

describe('NgifElseComponent', () => {
  let component: NgifElseComponent;
  let fixture: ComponentFixture<NgifElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgifElseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
