import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargesLaitComponent } from './charges-lait.component';

describe('ChargesLaitComponent', () => {
  let component: ChargesLaitComponent;
  let fixture: ComponentFixture<ChargesLaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChargesLaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargesLaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
