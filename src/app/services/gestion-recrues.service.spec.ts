import { TestBed } from '@angular/core/testing';

import { GestionRecruesService } from './gestion-recrues.service';

describe('GestionRecruesService', () => {
  let service: GestionRecruesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionRecruesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
