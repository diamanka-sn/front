import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccroissementComponent } from './accroissement.component';

describe('AccroissementComponent', () => {
  let component: AccroissementComponent;
  let fixture: ComponentFixture<AccroissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccroissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccroissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
