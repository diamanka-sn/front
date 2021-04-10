import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontAchatComponent } from './front-achat.component';

describe('FrontAchatComponent', () => {
  let component: FrontAchatComponent;
  let fixture: ComponentFixture<FrontAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
