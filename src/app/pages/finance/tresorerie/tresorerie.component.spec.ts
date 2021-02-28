import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorerieComponent } from './tresorerie.component';

describe('TresorerieComponent', () => {
  let component: TresorerieComponent;
  let fixture: ComponentFixture<TresorerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresorerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
