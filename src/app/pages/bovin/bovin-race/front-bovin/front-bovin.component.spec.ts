import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontBovinComponent } from './front-bovin.component';

describe('FrontBovinComponent', () => {
  let component: FrontBovinComponent;
  let fixture: ComponentFixture<FrontBovinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontBovinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontBovinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
