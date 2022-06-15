import { TestBed } from '@angular/core/testing';

import { WikipediaserviceService } from './wikipediaservice.service';

describe('WikipediaserviceService', () => {
  let service: WikipediaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikipediaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
