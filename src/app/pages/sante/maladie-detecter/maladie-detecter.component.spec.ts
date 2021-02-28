import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladieDetecterComponent } from './maladie-detecter.component';

describe('MaladieDetecterComponent', () => {
  let component: MaladieDetecterComponent;
  let fixture: ComponentFixture<MaladieDetecterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaladieDetecterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaladieDetecterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
