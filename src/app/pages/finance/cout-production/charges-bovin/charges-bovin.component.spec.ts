import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesBovinComponent } from './charges-bovin.component';

describe('ChargesBovinComponent', () => {
  let component: ChargesBovinComponent;
  let fixture: ComponentFixture<ChargesBovinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargesBovinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesBovinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
