import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockLaitComponent } from './stock-lait.component';

describe('StockLaitComponent', () => {
  let component: StockLaitComponent;
  let fixture: ComponentFixture<StockLaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockLaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockLaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
