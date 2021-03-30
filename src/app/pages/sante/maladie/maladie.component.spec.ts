import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaladieComponent } from './maladie.component';

describe('MaladieComponent', () => {
  let component: MaladieComponent;
  let fixture: ComponentFixture<MaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaladieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
