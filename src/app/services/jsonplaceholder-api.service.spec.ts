import { TestBed } from '@angular/core/testing';

import { JSONPlaceholderApiService } from './jsonplaceholder-api.service';

describe('JSONPlaceholderApiService', () => {
  let service: JSONPlaceholderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JSONPlaceholderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
