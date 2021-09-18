import { TestBed } from '@angular/core/testing';

import { VtLibService } from './vt-lib.service';

describe('VtLibService', () => {
  let service: VtLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VtLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
