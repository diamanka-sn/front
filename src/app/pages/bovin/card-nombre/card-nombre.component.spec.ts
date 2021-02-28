import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNombreComponent } from './card-nombre.component';

describe('CardNombreComponent', () => {
  let component: CardNombreComponent;
  let fixture: ComponentFixture<CardNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
