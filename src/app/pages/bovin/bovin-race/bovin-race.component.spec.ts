import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinRaceComponent } from './bovin-race.component';

describe('BovinRaceComponent', () => {
  let component: BovinRaceComponent;
  let fixture: ComponentFixture<BovinRaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovinRaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BovinRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
