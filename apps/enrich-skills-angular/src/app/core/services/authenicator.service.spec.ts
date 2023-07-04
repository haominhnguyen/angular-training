import { TestBed } from '@angular/core/testing';

import { AuthenicatorService } from './authenicator.service';

describe('AuthenicatorService', () => {
  let service: AuthenicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
