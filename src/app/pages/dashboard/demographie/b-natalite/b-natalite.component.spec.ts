import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BNataliteComponent } from './b-natalite.component';

describe('BNataliteComponent', () => {
  let component: BNataliteComponent;
  let fixture: ComponentFixture<BNataliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BNataliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BNataliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
