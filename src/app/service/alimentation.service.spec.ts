import { TestBed } from '@angular/core/testing';

import { AlimentationService } from './alimentation.service';

describe('AlimentationService', () => {
  let service: AlimentationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlimentationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
