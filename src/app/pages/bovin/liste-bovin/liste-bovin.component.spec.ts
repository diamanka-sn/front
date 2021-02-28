import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBovinComponent } from './liste-bovin.component';

describe('ListeBovinComponent', () => {
  let component: ListeBovinComponent;
  let fixture: ComponentFixture<ListeBovinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBovinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBovinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
