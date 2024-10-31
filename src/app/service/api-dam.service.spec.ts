import { TestBed } from '@angular/core/testing';

import { ApiDamService } from './api-dam.service';

describe('ApiDamService', () => {
  let service: ApiDamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
