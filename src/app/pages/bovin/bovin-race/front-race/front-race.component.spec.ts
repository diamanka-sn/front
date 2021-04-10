import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontRaceComponent } from './front-race.component';

describe('FrontRaceComponent', () => {
  let component: FrontRaceComponent;
  let fixture: ComponentFixture<FrontRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontRaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
