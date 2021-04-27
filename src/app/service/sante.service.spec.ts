import { TestBed } from '@angular/core/testing';

import { SanteService } from './sante.service';

describe('SanteService', () => {
  let service: SanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
