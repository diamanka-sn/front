import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutPeriodiciteComponent } from './cout-periodicite.component';

describe('CoutPeriodiciteComponent', () => {
  let component: CoutPeriodiciteComponent;
  let fixture: ComponentFixture<CoutPeriodiciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutPeriodiciteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutPeriodiciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
