import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackCommandeComponent } from './back-commande.component';

describe('BackCommandeComponent', () => {
  let component: BackCommandeComponent;
  let fixture: ComponentFixture<BackCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
