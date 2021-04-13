import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackProductionComponent } from './back-production.component';

describe('BackProductionComponent', () => {
  let component: BackProductionComponent;
  let fixture: ComponentFixture<BackProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
