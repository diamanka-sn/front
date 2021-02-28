import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNataliteComponent } from './card-natalite.component';

describe('CardNataliteComponent', () => {
  let component: CardNataliteComponent;
  let fixture: ComponentFixture<CardNataliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNataliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNataliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
