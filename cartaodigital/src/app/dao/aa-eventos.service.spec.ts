import { TestBed } from '@angular/core/testing';

import { AaEventosService } from './aa-eventos.service';

describe('AaEventosService', () => {
  let service: AaEventosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AaEventosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
