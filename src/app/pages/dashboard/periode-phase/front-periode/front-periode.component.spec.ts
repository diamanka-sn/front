import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPeriodeComponent } from './front-periode.component';

describe('FrontPeriodeComponent', () => {
  let component: FrontPeriodeComponent;
  let fixture: ComponentFixture<FrontPeriodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPeriodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPeriodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
