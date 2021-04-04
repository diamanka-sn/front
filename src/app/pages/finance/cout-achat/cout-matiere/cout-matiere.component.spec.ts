import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutMatiereComponent } from './cout-matiere.component';

describe('CoutMatiereComponent', () => {
  let component: CoutMatiereComponent;
  let fixture: ComponentFixture<CoutMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutMatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
