import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanteComponent } from './sante.component';

describe('SanteComponent', () => {
  let component: SanteComponent;
  let fixture: ComponentFixture<SanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
