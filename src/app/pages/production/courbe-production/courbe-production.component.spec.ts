import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourbeProductionComponent } from './courbe-production.component';

describe('CourbeProductionComponent', () => {
  let component: CourbeProductionComponent;
  let fixture: ComponentFixture<CourbeProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourbeProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourbeProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
