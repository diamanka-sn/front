import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChiffreComponent } from './card-chiffre.component';

describe('CardChiffreComponent', () => {
  let component: CardChiffreComponent;
  let fixture: ComponentFixture<CardChiffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardChiffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardChiffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
