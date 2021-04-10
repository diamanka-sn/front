import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontStockComponent } from './front-stock.component';

describe('FrontStockComponent', () => {
  let component: FrontStockComponent;
  let fixture: ComponentFixture<FrontStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
