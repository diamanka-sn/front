import { TestBed } from '@angular/core/testing';

import { DepensesService } from './depenses.service';

describe('DepensesService', () => {
  let service: DepensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
