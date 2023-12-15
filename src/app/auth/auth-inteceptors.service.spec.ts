import { TestBed } from '@angular/core/testing';

import { AuthInteceptorsService } from './auth-inteceptors.service';

describe('AuthInteceptorsService', () => {
  let service: AuthInteceptorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInteceptorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
