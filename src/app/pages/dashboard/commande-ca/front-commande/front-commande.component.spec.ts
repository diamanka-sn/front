import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontCommandeComponent } from './front-commande.component';

describe('FrontCommandeComponent', () => {
  let component: FrontCommandeComponent;
  let fixture: ComponentFixture<FrontCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
