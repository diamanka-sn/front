import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSanteComponent } from './card-sante.component';

describe('CardSanteComponent', () => {
  let component: CardSanteComponent;
  let fixture: ComponentFixture<CardSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
