import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductionComponent } from './card-production.component';

describe('CardProductionComponent', () => {
  let component: CardProductionComponent;
  let fixture: ComponentFixture<CardProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
