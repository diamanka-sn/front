import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVelageComponent } from './card-velage.component';

describe('CardVelageComponent', () => {
  let component: CardVelageComponent;
  let fixture: ComponentFixture<CardVelageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVelageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVelageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
