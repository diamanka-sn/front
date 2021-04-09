import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentationSanteComponent } from './alimentation-sante.component';

describe('AlimentationSanteComponent', () => {
  let component: AlimentationSanteComponent;
  let fixture: ComponentFixture<AlimentationSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentationSanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentationSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
