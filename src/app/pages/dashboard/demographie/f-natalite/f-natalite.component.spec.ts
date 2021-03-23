import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FNataliteComponent } from './f-natalite.component';

describe('FNataliteComponent', () => {
  let component: FNataliteComponent;
  let fixture: ComponentFixture<FNataliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FNataliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FNataliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
