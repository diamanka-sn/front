import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutProductionComponent } from './cout-production.component';

describe('CoutProductionComponent', () => {
  let component: CoutProductionComponent;
  let fixture: ComponentFixture<CoutProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
