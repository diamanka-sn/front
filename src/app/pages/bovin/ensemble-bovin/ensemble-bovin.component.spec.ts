import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsembleBovinComponent } from './ensemble-bovin.component';

describe('EnsembleBovinComponent', () => {
  let component: EnsembleBovinComponent;
  let fixture: ComponentFixture<EnsembleBovinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsembleBovinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsembleBovinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
