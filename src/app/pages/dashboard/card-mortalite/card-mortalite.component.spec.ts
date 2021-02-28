import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMortaliteComponent } from './card-mortalite.component';

describe('CardMortaliteComponent', () => {
  let component: CardMortaliteComponent;
  let fixture: ComponentFixture<CardMortaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMortaliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMortaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
