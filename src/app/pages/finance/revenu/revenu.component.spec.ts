import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenuComponent } from './revenu.component';

describe('RevenuComponent', () => {
  let component: RevenuComponent;
  let fixture: ComponentFixture<RevenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
