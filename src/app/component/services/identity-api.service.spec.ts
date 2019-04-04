import { TestBed } from '@angular/core/testing';

import { IdentityApiService } from './identity-api.service';

describe('IdentityApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdentityApiService = TestBed.get(IdentityApiService);
    expect(service).toBeTruthy();
  });
});
