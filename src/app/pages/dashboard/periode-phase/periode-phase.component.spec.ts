import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodePhaseComponent } from './periode-phase.component';

describe('PeriodePhaseComponent', () => {
  let component: PeriodePhaseComponent;
  let fixture: ComponentFixture<PeriodePhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodePhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodePhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
