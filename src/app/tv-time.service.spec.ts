import { TestBed } from '@angular/core/testing';

import { TvTimeService } from './tv-time.service';

describe('TvTimeService', () => {
  let service: TvTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
