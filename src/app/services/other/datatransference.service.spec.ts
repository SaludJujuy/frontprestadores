import { TestBed } from '@angular/core/testing';

import { DatatransferenceService } from './datatransference.service';

describe('DatatransferenceService', () => {
  let service: DatatransferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatransferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
