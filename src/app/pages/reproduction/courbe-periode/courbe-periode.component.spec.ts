import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourbePeriodeComponent } from './courbe-periode.component';

describe('CourbePeriodeComponent', () => {
  let component: CourbePeriodeComponent;
  let fixture: ComponentFixture<CourbePeriodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourbePeriodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourbePeriodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
