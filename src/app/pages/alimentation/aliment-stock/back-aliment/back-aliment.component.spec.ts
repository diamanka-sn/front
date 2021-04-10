import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackAlimentComponent } from './back-aliment.component';

describe('BackAlimentComponent', () => {
  let component: BackAlimentComponent;
  let fixture: ComponentFixture<BackAlimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackAlimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackAlimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
