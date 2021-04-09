import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackPhaseComponent } from './back-phase.component';

describe('BackPhaseComponent', () => {
  let component: BackPhaseComponent;
  let fixture: ComponentFixture<BackPhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackPhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackPhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
