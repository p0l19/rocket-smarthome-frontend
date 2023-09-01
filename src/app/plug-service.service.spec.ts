import { TestBed } from '@angular/core/testing';

import { PlugServiceService } from './plug-service.service';

describe('PlugServiceService', () => {
  let service: PlugServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlugServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
