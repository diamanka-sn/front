import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeSanteComponent } from './charge-sante.component';

describe('ChargeSanteComponent', () => {
  let component: ChargeSanteComponent;
  let fixture: ComponentFixture<ChargeSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargeSanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
