import { TestBed } from '@angular/core/testing';

import { PingOneDataService } from './ping-one-data.service';

describe('PingOneDataService', () => {
  let service: PingOneDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PingOneDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
