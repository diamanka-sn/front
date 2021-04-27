import { TestBed } from '@angular/core/testing';

import { ReproductionService } from './reproduction.service';

describe('ReproductionService', () => {
  let service: ReproductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReproductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
