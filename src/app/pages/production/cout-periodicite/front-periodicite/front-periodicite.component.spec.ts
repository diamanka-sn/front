import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontPeriodiciteComponent } from './front-periodicite.component';

describe('FrontPeriodiciteComponent', () => {
  let component: FrontPeriodiciteComponent;
  let fixture: ComponentFixture<FrontPeriodiciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontPeriodiciteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontPeriodiciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
