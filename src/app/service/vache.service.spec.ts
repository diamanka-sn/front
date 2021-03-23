import { TestBed } from '@angular/core/testing';

import { VacheService } from './vache.service';

describe('VacheService', () => {
  let service: VacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
