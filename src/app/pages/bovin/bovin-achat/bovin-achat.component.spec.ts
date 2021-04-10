import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinAchatComponent } from './bovin-achat.component';

describe('BovinAchatComponent', () => {
  let component: BovinAchatComponent;
  let fixture: ComponentFixture<BovinAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovinAchatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BovinAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
