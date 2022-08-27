import { TestBed } from '@angular/core/testing';

import { LoaderApiService } from './loader-api.service';

describe('LoaderApiService', () => {
  let service: LoaderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
