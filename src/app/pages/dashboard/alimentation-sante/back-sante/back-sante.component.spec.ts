import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackSanteComponent } from './back-sante.component';

describe('BackSanteComponent', () => {
  let component: BackSanteComponent;
  let fixture: ComponentFixture<BackSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackSanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
