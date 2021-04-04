import { TestBed } from '@angular/core/testing';

import { MaladieService } from './maladie.service';

describe('MaladieService', () => {
  let service: MaladieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaladieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
