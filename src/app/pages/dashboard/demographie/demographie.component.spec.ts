import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemographieComponent } from './demographie.component';

describe('DemographieComponent', () => {
  let component: DemographieComponent;
  let fixture: ComponentFixture<DemographieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemographieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemographieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
