import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTableComponent } from './liste-table.component';

describe('ListeTableComponent', () => {
  let component: ListeTableComponent;
  let fixture: ComponentFixture<ListeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
