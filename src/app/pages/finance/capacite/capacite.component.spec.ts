import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapaciteComponent } from './capacite.component';

describe('CapaciteComponent', () => {
  let component: CapaciteComponent;
  let fixture: ComponentFixture<CapaciteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapaciteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapaciteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
