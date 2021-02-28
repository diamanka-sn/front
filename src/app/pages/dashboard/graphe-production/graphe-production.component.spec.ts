import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapheProductionComponent } from './graphe-production.component';

describe('GrapheProductionComponent', () => {
  let component: GrapheProductionComponent;
  let fixture: ComponentFixture<GrapheProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrapheProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrapheProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
