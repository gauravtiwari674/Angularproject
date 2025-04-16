import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { watchmanGuard } from './watchman.guard';

describe('watchmanGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => watchmanGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
