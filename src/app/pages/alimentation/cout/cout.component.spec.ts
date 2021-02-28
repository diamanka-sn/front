import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutComponent } from './cout.component';

describe('CoutComponent', () => {
  let component: CoutComponent;
  let fixture: ComponentFixture<CoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
