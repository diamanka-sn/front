import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVenteComponent } from './card-vente.component';

describe('CardVenteComponent', () => {
  let component: CardVenteComponent;
  let fixture: ComponentFixture<CardVenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
