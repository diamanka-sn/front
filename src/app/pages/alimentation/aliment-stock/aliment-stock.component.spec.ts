import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentStockComponent } from './aliment-stock.component';

describe('AlimentStockComponent', () => {
  let component: AlimentStockComponent;
  let fixture: ComponentFixture<AlimentStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlimentStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlimentStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
