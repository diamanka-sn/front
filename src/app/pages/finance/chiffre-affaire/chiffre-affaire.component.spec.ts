import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffreAffaireComponent } from './chiffre-affaire.component';

describe('ChiffreAffaireComponent', () => {
  let component: ChiffreAffaireComponent;
  let fixture: ComponentFixture<ChiffreAffaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiffreAffaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiffreAffaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
