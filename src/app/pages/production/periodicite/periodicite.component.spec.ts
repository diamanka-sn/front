import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodiciteComponent } from './periodicite.component';

describe('PeriodiciteComponent', () => {
  let component: PeriodiciteComponent;
  let fixture: ComponentFixture<PeriodiciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodiciteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodiciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
