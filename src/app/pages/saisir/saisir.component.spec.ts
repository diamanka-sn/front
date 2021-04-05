import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisirComponent } from './saisir.component';

describe('SaisirComponent', () => {
  let component: SaisirComponent;
  let fixture: ComponentFixture<SaisirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
