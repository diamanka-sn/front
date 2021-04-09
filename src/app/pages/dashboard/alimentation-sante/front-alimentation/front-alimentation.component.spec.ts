import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAlimentationComponent } from './front-alimentation.component';

describe('FrontAlimentationComponent', () => {
  let component: FrontAlimentationComponent;
  let fixture: ComponentFixture<FrontAlimentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontAlimentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
