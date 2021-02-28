import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAlimentationComponent } from './card-alimentation.component';

describe('CardAlimentationComponent', () => {
  let component: CardAlimentationComponent;
  let fixture: ComponentFixture<CardAlimentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAlimentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
