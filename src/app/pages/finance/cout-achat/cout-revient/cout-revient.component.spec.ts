import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutRevientComponent } from './cout-revient.component';

describe('CoutRevientComponent', () => {
  let component: CoutRevientComponent;
  let fixture: ComponentFixture<CoutRevientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutRevientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutRevientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
