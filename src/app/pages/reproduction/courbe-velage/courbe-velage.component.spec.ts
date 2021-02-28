import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourbeVelageComponent } from './courbe-velage.component';

describe('CourbeVelageComponent', () => {
  let component: CourbeVelageComponent;
  let fixture: ComponentFixture<CourbeVelageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourbeVelageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourbeVelageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
