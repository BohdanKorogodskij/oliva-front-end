import { TestBed } from '@angular/core/testing';

import { TovarAllUpdateService } from './tovar-all-update.service';

describe('TovarAllUpdateService', () => {
  let service: TovarAllUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TovarAllUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
