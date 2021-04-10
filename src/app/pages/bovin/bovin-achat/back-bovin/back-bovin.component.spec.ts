import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackBovinComponent } from './back-bovin.component';

describe('BackBovinComponent', () => {
  let component: BackBovinComponent;
  let fixture: ComponentFixture<BackBovinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackBovinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackBovinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
