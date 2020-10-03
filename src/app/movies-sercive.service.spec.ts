import { TestBed } from '@angular/core/testing';

import { MoviesSerciveService } from './movies-sercive.service';

describe('MoviesSerciveService', () => {
  let service: MoviesSerciveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesSerciveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
