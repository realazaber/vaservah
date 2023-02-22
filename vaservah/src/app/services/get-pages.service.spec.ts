import { TestBed } from '@angular/core/testing';

import { GetPagesService } from './get-pages.service';

describe('GetPagesService', () => {
  let service: GetPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
