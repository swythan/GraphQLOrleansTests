import { TestBed } from '@angular/core/testing';

import { LiqSourceService } from './liq-source.service';

describe('LiqSourceService', () => {
  let service: LiqSourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiqSourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
