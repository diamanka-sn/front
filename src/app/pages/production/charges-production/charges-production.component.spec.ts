import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesProductionComponent } from './charges-production.component';

describe('ChargesProductionComponent', () => {
  let component: ChargesProductionComponent;
  let fixture: ComponentFixture<ChargesProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargesProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
