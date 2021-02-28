import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationJourComponent } from './consommation-jour.component';

describe('ConsommationJourComponent', () => {
  let component: ConsommationJourComponent;
  let fixture: ComponentFixture<ConsommationJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommationJourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsommationJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
