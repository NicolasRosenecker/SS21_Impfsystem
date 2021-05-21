import { TestBed } from '@angular/core/testing';

import { ImpfsystemService } from './impfsystem.service';

describe('ImpfsystemService', () => {
  let service: ImpfsystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpfsystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
