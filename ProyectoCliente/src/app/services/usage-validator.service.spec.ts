import { TestBed } from '@angular/core/testing';

import { UsageValidatorService } from './usage-validator.service';

describe('UsageValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsageValidatorService = TestBed.get(UsageValidatorService);
    expect(service).toBeTruthy();
  });
});
