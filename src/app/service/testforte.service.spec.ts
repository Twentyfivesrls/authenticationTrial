import { TestBed } from '@angular/core/testing';

import { TestforteService } from './testforte.service';

describe('TestforteService', () => {
  let service: TestforteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestforteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
