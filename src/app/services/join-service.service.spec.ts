import { TestBed, inject } from '@angular/core/testing';

import { JoinServiceService } from './join-service.service';

describe('JoinServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoinServiceService]
    });
  });

  it('should be created', inject([JoinServiceService], (service: JoinServiceService) => {
    expect(service).toBeTruthy();
  }));
});
