import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BovinAchatsComponent } from './bovin-achats.component';

describe('BovinAchatsComponent', () => {
  let component: BovinAchatsComponent;
  let fixture: ComponentFixture<BovinAchatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BovinAchatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BovinAchatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
