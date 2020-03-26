import { TestBed } from '@angular/core/testing';

import { CLientsService } from './clients.service';

describe('CLientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CLientsService = TestBed.get(CLientsService);
    expect(service).toBeTruthy();
  });
});
