import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesComponent } from './comptes.component';

describe('ComptesComponent', () => {
  let component: ComptesComponent;
  let fixture: ComponentFixture<ComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
