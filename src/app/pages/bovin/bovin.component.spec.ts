import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinComponent } from './bovin.component';

describe('BovinComponent', () => {
  let component: BovinComponent;
  let fixture: ComponentFixture<BovinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BovinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
