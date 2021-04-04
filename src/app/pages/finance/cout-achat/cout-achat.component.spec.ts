import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutAchatComponent } from './cout-achat.component';

describe('CoutAchatComponent', () => {
  let component: CoutAchatComponent;
  let fixture: ComponentFixture<CoutAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoutAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
