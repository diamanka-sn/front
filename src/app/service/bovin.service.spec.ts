import { TestBed } from '@angular/core/testing';

import { BovinService } from './bovin.service';

describe('BovinService', () => {
  let service: BovinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BovinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
