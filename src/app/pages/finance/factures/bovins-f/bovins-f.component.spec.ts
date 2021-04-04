import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinsFComponent } from './bovins-f.component';

describe('BovinsFComponent', () => {
  let component: BovinsFComponent;
  let fixture: ComponentFixture<BovinsFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovinsFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BovinsFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
