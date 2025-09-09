import { TestBed } from '@angular/core/testing';

import { Tovar } from './tovar.service';

describe('Tovar', () => {
  let service: Tovar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tovar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
