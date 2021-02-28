import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommandeComponent } from './card-commande.component';

describe('CardCommandeComponent', () => {
  let component: CardCommandeComponent;
  let fixture: ComponentFixture<CardCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
