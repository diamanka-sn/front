import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBovinComponent } from './detail-bovin.component';

describe('DetailBovinComponent', () => {
  let component: DetailBovinComponent;
  let fixture: ComponentFixture<DetailBovinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBovinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBovinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
